export interface PNR {
  airSegementbooked: boolean;
  corporateRewards?: any[];
  eligiblePNR: boolean;
  searchBounds?: any;
  travellers: Traveller[];
}

export interface Traveller {
  hasInfant: boolean;
  infantTraveller?: any;
  ptcId: number;
  ptc: PTC;
}

export interface PTC {
  ageNeeded?: boolean;
  category?: string;
  code: string;
  dateOfBirth?: string;
  infantAllowed?: boolean;
  label?: string;
  value?: string;
  key?: string;
  // In the searchInit response, 'hasInfant' is at Traveller level, but in Search Request, it is at PTC level
  hasInfant?: boolean;
}
