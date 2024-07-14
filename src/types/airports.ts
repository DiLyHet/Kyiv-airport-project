export type Airport = {
  terminal: string;
  departureCity: string;
  arrivalCity: string;
  type: string;
  departureDate: number | null;
  arrivalDate: number | null;
  departureDateExpected: number | null;
  arrivalDateExpected: number | null;
  status: string;
  airlineName: string;
  airlineLogo: string;
  id: string;
  codeShare: string;
};