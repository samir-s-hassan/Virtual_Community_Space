import { pool } from "../config/database.js";

// Function to get all locations
const getLocations = async (req, res) => {
  try {
    const results = await pool.query(
      "SELECT * FROM locations ORDER BY location_id ASC"
    );
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

// Function to get a single location by ID
const getLocationById = async (req, res) => {
  try {
    const selectQuery = `
      SELECT name, address, city, state, image
      FROM locations
      WHERE location_id = $1
    `;
    const location_id = req.params.location_id; // Ensure this matches the route parameter
    const results = await pool.query(selectQuery, [location_id]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

// Function to get all events at a specific location
const getLocationEvents = async (req, res) => {
  try {
    const selectQuery = `
      SELECT e.event_id, e.title, e.description, e.date, e.image
      FROM events e
      INNER JOIN locations l ON e.location_id = l.location_id
      WHERE l.location_id = $1
      ORDER BY e.date ASC
    `;
    const location_id = req.params.location_id; // Ensure this matches the route parameter
    const results = await pool.query(selectQuery, [location_id]);
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getLocations,
  getLocationById,
  getLocationEvents,
};
