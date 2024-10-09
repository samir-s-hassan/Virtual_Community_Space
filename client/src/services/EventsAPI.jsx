// Define the base URL for your API
const API_BASE_URL = "http://localhost:3000/events"; // Adjust as needed

// Function to get all events
const getAllEvents = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    return response.json();
  } catch (error) {
    console.error("Error fetching all events:", error);
    throw error;
  }
};

// Function to get events by location ID
const getEventsByLocationId = async (location_id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/l${location_id}`);
    return response.json();
  } catch (error) {
    console.error(`Error fetching events for location ${location_id}:`, error);
    throw error;
  }
};

// Function to get an event by event ID
const getEventsById = async (event_id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${event_id}`);
    return response.json();
  } catch (error) {
    console.error(`Error fetching event with ID ${event_id}:`, error);
    throw error;
  }
};

const EventsAPI = {
  getAllEvents,
  getEventsByLocationId,
  getEventsById,
};

// Export all functions
export default EventsAPI;
