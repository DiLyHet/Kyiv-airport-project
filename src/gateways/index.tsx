import axios from "axios";

const API_URL = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/airport";

export const getAirportData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching airport data:", error);
    throw error;
  }
};
