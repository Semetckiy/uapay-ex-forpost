export interface FarePricingRequest {
  beatPNR?: false,
  fareDiscount?: null,
  recommendations: [{
    elements: [any],
    recommendationId: string,
  }],
  travelShopperTicket: number
}