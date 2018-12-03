import { Injectable } from '@angular/core';
import {
  BookingClass,
  FareType,
  CodeLabel,
  AllResultsValuesSummary,
  Carrier,
  PassengerPriceBreakdown,
  PriceBreakdown,
  Recommendation,
  ResultSearchData,
  SearchResult,
  Segment,
  Solution,
  Traveller
} from '../models/airpulse.result.model';

// codes in the dictionary of the JSON response from master pricer
const SERVICE_FEES_CODE = '13';
const MARKUP_CODE = '0';

@Injectable()
export class SearchResponseDecompressionService {
  private uniqueFareTypesInRecommendations: FareType[] = [];
  private uniqueMarketingAirlinesInRecommendations: CodeLabel[] = [];
  private uniqueBookingClassOptions: Set<string> = new Set();

  constructor() {}

  decompressDictionary(jsonDictionary) {
    // decompress airlines / locations / equipments / operating airlines in carriers
    jsonDictionary.carriers.forEach(currentCarrier => {
      currentCarrier.airline = jsonDictionary.airlines[currentCarrier.airline];
      if (currentCarrier.operatingAirline !== null) {
        currentCarrier.operatingAirline = jsonDictionary.airlines[currentCarrier.operatingAirline];
      }
      currentCarrier.departure.location = jsonDictionary.sites[currentCarrier.departure.location];
      currentCarrier.arrival.location = jsonDictionary.sites[currentCarrier.arrival.location];
      currentCarrier.equipment = jsonDictionary.equipments[currentCarrier.equipment];
    });

    // decompress airlines in fare families
    jsonDictionary.fareFamilies.forEach(currentFareFamily => {
      currentFareFamily.airline = jsonDictionary.airlines[currentFareFamily.airline];
      // decompress services in fare families
      currentFareFamily.services.forEach(currentService => {
        currentService.ffService = jsonDictionary.fareFamilyServices[currentService.ffServiceId];
      });
    });

    // decompress carriers
    jsonDictionary.bounds.forEach(currentBound => {
      currentBound.solutions.forEach(currentSolution => {
        currentSolution.segments.forEach(currentSegment => {
          currentSegment.carrier = jsonDictionary.carriers[currentSegment.carrierId];
        });
      });
    });

    return jsonDictionary;
  }

  decompressProposals(dictionary, proposals) {
    proposals.forEach(currentProposal => {
      currentProposal.fareType = dictionary.fareTypes[currentProposal.fareType];
      this.decompressProposalPriceBreakdown(dictionary, currentProposal);
      this.decompressProposalBounds(dictionary, currentProposal);
      this.decompressProposalRecommendationSolutions(currentProposal);
    });

    return proposals;
  }

  decompressProposalPriceBreakdown(dictionary, proposal) {
    proposal.priceBreakdown.currency = dictionary.currencies[proposal.priceBreakdown.currency];

    const passengersPriceBreakdownArray: any[] = Object.values(proposal.passengerPriceBreakdowns);
    let travellerId = 1;
    passengersPriceBreakdownArray.forEach(currentPassengerPriceBreakdown => {
      for (let i = 0; i < currentPassengerPriceBreakdown.pricedTravellerTypes.length; i++) {
        currentPassengerPriceBreakdown.pricedTravellerTypes[i] =
          dictionary.travellerTypes[currentPassengerPriceBreakdown.pricedTravellerTypes[i]];
      }
      if (currentPassengerPriceBreakdown.pricedTravellerTypes[0].code !== 'INF') {
        currentPassengerPriceBreakdown.travellerId = travellerId;
        travellerId++;
      }
      currentPassengerPriceBreakdown.fees.forEach(currentFee => {
        currentFee.feeType = dictionary.feeTypes[currentFee.feeType];
      });
    });
    // decompress fees in priceBreakdown
    proposal.priceBreakdown.fees.forEach(currentFee => {
      currentFee.feeType = dictionary.feeTypes[currentFee.feeType];
    });
  }

  decompressProposalBounds(dictionary, proposal) {
    let currentSolutionFromDictionary;
    proposal.bounds.forEach((currentProposalBound, currentProposalBoundsIndex) => {
      currentProposalBound.fareFamily = dictionary.fareFamilies[currentProposalBound.fareFamily];
      // run into all solutions of the current bound
      currentProposalBound.solutions.forEach(currentSolution => {
        currentSolution.technicalStops = dictionary.carriers[currentProposalBoundsIndex].technicalStops;
        currentSolutionFromDictionary = dictionary.bounds[currentProposalBoundsIndex].solutions[currentSolution.id];
        currentSolution.duration = currentSolutionFromDictionary.duration;
        currentSolution.segments.forEach((currentSegment, currentSegmentIndex) => {
          currentSegment.cabin.cabinFromDictionary = dictionary.cabins[currentSegment.cabin.id];
          currentSegment.carrier = currentSolutionFromDictionary.segments[currentSegmentIndex].carrier;
          currentSegment.fareFamily = dictionary.fareFamilies[currentSegment.fareFamily];
        });
      });
    });
  }

  decompressProposalRecommendationSolutions(proposal) {
    proposal.recommendations.forEach(currentRecommendation => {
      currentRecommendation.solutions.forEach((currentSolutionInRecommendation, boundsIndex) => {
        proposal.bounds[boundsIndex].solutions.forEach(currentSolutionInProposalBounds => {
          if (currentSolutionInProposalBounds.id === currentSolutionInRecommendation) {
            currentRecommendation.solutions[boundsIndex] = currentSolutionInProposalBounds;
            currentRecommendation.solutions[boundsIndex].fareFamily = proposal.bounds[boundsIndex].fareFamily;
          }
        });
      });
    });
  }

  /**
   * Decompress the data used by the booking engine to perform the search.
   *
   * @param jsonDictionary decompressed dictionary.
   * @param searchData Raw search data.
   */
  decompressSearchData(jsonDictionary, searchData): ResultSearchData {
    searchData.bounds.forEach(bound => {
      bound.departure = jsonDictionary.sites[bound.departure];
      bound.arrival = jsonDictionary.sites[bound.arrival];
      bound.date = this.createDate(bound.date);
    });

    const travellers: Traveller[] = [];
    for (const travellerId in searchData.travellers) {
      if (searchData.travellers.hasOwnProperty(travellerId)) {
        const traveller = searchData.travellers[travellerId];
        travellers.push({
          id: parseInt(travellerId, 10),
          ptc: jsonDictionary.travellerTypes[traveller.ptc],
          hasInfant: traveller.hasInfant
        });
      }
    }
    searchData.travellers = travellers;

    return searchData;
  }

  instantiateRecommendationsList(proposals): Recommendation[] {
    const recommendationsList: Recommendation[] = [];
    let reco: Recommendation, sol: Solution, segment: Segment, passengersPriceBreakdowns: PassengerPriceBreakdown[];
    let segmentsCount: number;
    let indexCount = 0; // index of recommendation in result list. We want to display error only under recommendation with the same index

    proposals.forEach(currentProposal => {
      passengersPriceBreakdowns = this.formPassengersPriceBreakdowns(currentProposal.passengerPriceBreakdowns);
      this.addUniqueValue(this.uniqueFareTypesInRecommendations, currentProposal.fareType);

      currentProposal.recommendations.forEach(currentRecommendation => {
        const markup = this.getFeeValue( currentProposal.priceBreakdown.fees, MARKUP_CODE);
        const serviceFees = this.getFeeValue( currentProposal.priceBreakdown.fees, SERVICE_FEES_CODE);

        reco = new Recommendation(
          indexCount,
          new PriceBreakdown(
            currentProposal.priceBreakdown.priceWithoutTax,
            currentProposal.priceBreakdown.tax,
            serviceFees,
            markup,
            currentProposal.priceBreakdown.price
          ),
          passengersPriceBreakdowns,
          currentProposal.fareType,
          currentProposal.priceBreakdown.currency.code,
          currentProposal.id,
          !!currentProposal.ndc
        );
        indexCount++;
        currentRecommendation.solutions.forEach((currentSolution, solutionIndex) => {
          const solutionBaggageAllowance = currentRecommendation.baggageAllowance[solutionIndex];
          segmentsCount = currentSolution.segments.length;
          sol = new Solution(
            this.createDate(currentSolution.segments[0].carrier.departure.date),
            this.createDate(currentSolution.segments[segmentsCount - 1].carrier.arrival.date),
            currentSolution.duration,
            currentSolution.segments[0].carrier.departure.location.location.code,
            currentSolution.segments[segmentsCount - 1].carrier.arrival.location.location.code,
            currentSolution.fareFamily,
            currentSolution.elementRef,
            currentSolution.technicalStops
          );
          currentSolution.segments.forEach((currentSegment, segmentIndex) => {
            segment = new Segment();
            segment.cabin = currentSegment.cabin.cabinFromDictionary.code;
            segment.bookingClass = new BookingClass(currentSegment.cabin.bookingClass.classOfService,
              currentSegment.cabin.bookingClass.availabilityStays);
            this.uniqueBookingClassOptions.add(segment.bookingClass.classOfService);

            if (solutionBaggageAllowance) {
              segment.baggageAllowance = solutionBaggageAllowance[segmentIndex];
            }
            segment.carrier = new Carrier(
              currentSegment.carrier.airline,
              currentSegment.carrier.operatingAirline,
              this.createDate(currentSegment.carrier.departure.date),
              currentSegment.carrier.departure.location.location.code,
              this.createDate(currentSegment.carrier.arrival.date),
              currentSegment.carrier.arrival.location.location.code
            );
            segment.fareFamily = currentSegment.fareFamily;
            this.addUniqueValue(this.uniqueMarketingAirlinesInRecommendations, currentSegment.carrier.airline);
            sol.segments.push(segment);
          });
          reco.solutions.push(sol);
        });
        recommendationsList.push(reco);
      });
    });

    return recommendationsList;
  }

  decompressAndMapOnObjects(jsonRawResponse): SearchResult {
    this.uniqueFareTypesInRecommendations = [];
    this.uniqueMarketingAirlinesInRecommendations = [];
    this.uniqueBookingClassOptions = new Set();
    const dictionary = this.decompressDictionary(jsonRawResponse.response.model.results.dictionary);
    const proposals = this.decompressProposals(dictionary, jsonRawResponse.response.model.results.standard.proposals);
    const searchData = this.decompressSearchData(dictionary, jsonRawResponse.response.model.results.searchData);

    const searchResult = new SearchResult();
    searchResult.recommendations = this.instantiateRecommendationsList(proposals);
    searchResult.searchData = searchData;
    searchResult.travelShopperTicket = jsonRawResponse.response.model.results.travelShopperTicket;
    searchResult.allresultsValuesSummary = this.getAllResultsValuesSummary(dictionary);
    //this.initFilterDataService.initFilterObjects(searchResult.recommendations);

    searchResult.recommendations.forEach(recommendation => {
      recommendation.searchData = searchData;
    });
    return searchResult;
  }

  getAllResultsValuesSummary(dictionary: any): AllResultsValuesSummary {
    return {
      airlines: dictionary.airlines,
      marketingAirlines: this.uniqueMarketingAirlinesInRecommendations.slice(), // slice makes a copy of the array
      bounds: dictionary.bounds,
      sites: dictionary.sites,
      fareTypes: this.uniqueFareTypesInRecommendations.slice(), // slice makes a copy of the array
      cabinCodes: dictionary.cabins.map(cabin => cabin.code),
      bookingClasses: Array.from(this.uniqueBookingClassOptions)
    } as AllResultsValuesSummary;
  }

  /**
   * Temporary fix: dates must not be created with a timezone.
   *
   * @param dateString String representation of a date.
   */
  private createDate(dateString: string): Date {
    return new Date(dateString.replace(' GMT+0000', ''));
  }

  private addUniqueValue(uniqueArr, newAirlineCode: CodeLabel | FareType) {
    const airlineAlreadyInList = uniqueArr.some(
      airline => airline.code === newAirlineCode.code
    );
    if (!airlineAlreadyInList) {
      uniqueArr.push(newAirlineCode);
    }
  }

  private formPassengersPriceBreakdowns(proposalPriceBreakdowns) {
    // build passengerPriceBreakdowns array
    const passengersPriceBreakdowns: PassengerPriceBreakdown[] = [];
    const passengersPriceBreakdownArray: any[] = Object.values(proposalPriceBreakdowns);
    let markup = 0;
    let serviceFees = 0;

    passengersPriceBreakdownArray.forEach(currentPassengersPriceBreakdown => {
      // look for markup and service fees
      markup = this.getFeeValue(currentPassengersPriceBreakdown.fees, MARKUP_CODE);
      serviceFees = this.getFeeValue(currentPassengersPriceBreakdown.fees, SERVICE_FEES_CODE);
      passengersPriceBreakdowns.push(
        new PassengerPriceBreakdown(
          new PriceBreakdown(
            currentPassengersPriceBreakdown.priceWithoutTax,
            currentPassengersPriceBreakdown.tax,
            serviceFees,
            markup,
            currentPassengersPriceBreakdown.price
          ),
          currentPassengersPriceBreakdown.fareBasis,
          currentPassengersPriceBreakdown.pricedTravellerTypes,
          currentPassengersPriceBreakdown.travellerId
        )
      );
    });
    return passengersPriceBreakdowns;
  }

  private getFeeValue(feesList, code: string) {
    feesList.forEach(currentFee => {
      if (currentFee.feeType.code === code) {
        return currentFee.amount;
      }
    });
    return 0;
  }
}
