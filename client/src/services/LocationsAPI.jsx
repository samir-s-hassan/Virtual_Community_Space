// src/services/LocationsAPI.jsx

import axios from "axios";

// Define the base URL for your API
const API_BASE_URL = "http://localhost:3000/locations"; // Adjust as needed

// Function to get all locations
const getAllLocations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all locations:", error);
    throw error;
  }
};

// Function to get a location by location ID
const getLocationById = async (location_id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${location_id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching location with ID ${location_id}:`, error);
    throw error;
  }
};

// Export all functions
export { getAllLocations, getLocationById };
