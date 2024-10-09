import { pool } from "../config/database.js";

//Function to get all events
const getEvents = async (req, res) => {
  try {
    const results = await pool.query(
      ` SELECT e.event_id, e.title, e.description, e.date, l.name AS location_name, e.image
        FROM events e
        INNER JOIN locations l ON e.location_id = l.location_id
        ORDER BY e.event_id ASC`
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
        SELECT e.event_id, e.title, e.description, e.date, l.name AS location_name, e.image
        FROM events e
        INNER JOIN locations l ON e.location_id = l.location_id
        WHERE e.event_id = $1
        ORDER BY e.date ASC
    `;
    const event_id = req.params.event_id; // Ensure this matches the route parameter
    const results = await pool.query(selectQuery, [event_id]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

// Function to get all events by location ID, including location name
const getEventsByLocationId = async (req, res) => {
  try {
    const selectQuery = `
        SELECT e.event_id, e.title, e.description, e.date, l.name AS location_name, e.image 
        FROM events e
        INNER JOIN locations l ON e.location_id = l.location_id
        WHERE e.location_id = $1
        ORDER BY e.date ASC
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
