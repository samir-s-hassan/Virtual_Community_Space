// src/services/LocationsAPI.jsx

// Define the base URL for your API
const API_BASE_URL = "http://localhost:3000/locations"; // Adjust as needed

// Function to get all locations
const getAllLocations = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    return response.json();
  } catch (error) {
    console.error("Error fetching all locations:", error);
    throw error;
  }
};

// Function to get a location by location ID
const getLocationById = async (location_id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${location_id}`);
    return response.json();
  } catch (error) {
    console.error(`Error fetching location with ID ${location_id}:`, error);
    throw error;
  }
};

// Export all functions
const LocationsAPI = {
  getAllLocations,
  getLocationById,
};

export default LocationsAPI;
