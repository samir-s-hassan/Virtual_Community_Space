import { pool } from "../config/database.js";

//Function to get all events
const getEvents = async (req, res) => {
  try {
    const results = await pool.query(
      "SELECT * FROM events ORDER BY event_id ASC"
    );
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

//Function to get each event by their ID
const getEventById = async (req, res) => {
  try {
    const selectQuery = `
      SELECT title, description, date, image
      FROM events
      WHERE event_id = $1
    `;
    const event_id = req.params.event_id; // Ensure this matches the route parameter
    const results = await pool.query(selectQuery, [event_id]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

// Function to get all events by location ID
const getEventsByLocationId = async (req, res) => {
  try {
    const selectQuery = `
        SELECT event_id, title, description, date, image
        FROM events
        WHERE location_id = $1
        ORDER BY date ASC
      `;
    const location_id = req.params.location_id;
    const results = await pool.query(selectQuery, [location_id]);
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getEvents,
  getEventById,
  getEventsByLocationId,
};
