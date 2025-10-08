import axios from 'axios';

// Base URL
const BASE_URL = 'https://nominatim.openstreetmap.org';

export const fetchLocations = async (query, limit = 5) => {
  if (!query) return [];
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        q: query,
        format: 'json',
        addressdetails: 1,
        limit,
      },
    });
    return response.data;
  } catch (err) {
    console.error('Error fetching locations:', err);
    return [];
  }
};
