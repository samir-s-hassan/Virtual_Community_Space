import { pool } from "./database.js";
import "./dotenv.js";
import eventsData from "../data/events.js";
import locationsData from "../data/locations.js";

// Function to create the locations table
const createLocationsTable = async () => {
  const createTableQuery = `
      DROP TABLE IF EXISTS locations CASCADE;

      CREATE TABLE IF NOT EXISTS locations (
        location_id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(100) NOT NULL,
        state VARCHAR(100) NOT NULL,
        image VARCHAR(255) NOT NULL
      );
    `;

  try {
    await pool.query(createTableQuery);
    console.log("🎉 locations table created successfully");
  } catch (err) {
    console.error("⚠️ error creating locations table", err);
  }
};

// Function to seed the locations table with data
const seedLocationsTable = async () => {
  await createLocationsTable(); // Drop and recreate locations table with CASCADE
  try {
    for (const location of locationsData) {
      const insertQuery = `
          INSERT INTO locations (name, address, city, state, image)
          VALUES ($1, $2, $3, $4, $5)
        `;
      const values = [
        location.name,
        location.address,
        location.city,
        location.state,
        location.image,
      ];

      await pool.query(insertQuery, values);
      console.log(`✅ ${location.name} added successfully`);
    }
  } catch (err) {
    console.error("⚠️ error seeding locations data", err);
  }
};

// Function to create the events table
const createEventsTable = async () => {
  const createTableQuery = `
      DROP TABLE IF EXISTS events;

      CREATE TABLE IF NOT EXISTS events (
        event_id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        date DATE NOT NULL,
        location_id INTEGER REFERENCES locations(location_id) ON DELETE CASCADE,
        image VARCHAR(255) NOT NULL
      );
    `;

  try {
    await pool.query(createTableQuery);
    console.log("🎉 events table created successfully");
  } catch (err) {
    console.error("⚠️ error creating events table", err);
  }
};

// Function to seed the events table with data
const seedEventsTable = async () => {
  await createEventsTable(); // Recreate the events table

  try {
    for (const event of eventsData) {
      const insertQuery = `
          INSERT INTO events (title, description, date, location_id, image)
          VALUES ($1, $2, $3, $4, $5)
        `;
      const values = [
        event.title,
        event.description,
        event.date,
        event.location_id,
        event.image,
      ];

      await pool.query(insertQuery, values);
      console.log(`✅ ${event.title} added successfully`);
    }
  } catch (err) {
    console.error("⚠️ error seeding events data", err);
  }
};

// Seed all tables in the correct order
const seedTables = async () => {
  await seedLocationsTable(); // Seed locations
  await seedEventsTable(); // Seed events
};

seedTables();
