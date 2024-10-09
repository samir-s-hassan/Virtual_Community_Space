import React, { useState, useEffect } from "react";
import Event from "../components/Event";
import LocationsAPI from "../services/LocationsAPI";
import EventsAPI from "../services/EventsAPI";
import "../css/LocationEvents.css";

const LocationEvents = ({ locationId }) => {
  const [location, setLocation] = useState({});
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch location details
    const fetchLocationData = async () => {
      try {
        const locationData = await LocationsAPI.getLocationById(locationId);
        setLocation(locationData);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    // Fetch events for the location
    const fetchEventsData = async () => {
      try {
        const eventsData = await EventsAPI.getEventsByLocationId(locationId);
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events data:", error);
      }
    };

    // Call the functions to fetch data
    fetchLocationData();
    fetchEventsData();
  }, [locationId]); // Runs when locationId changes

  return (
    <div className="location-events">
      <header>
        <div className="location-image">
          <img src={location.image} alt={location.name} />
        </div>

        <div className="location-info">
          <h2>{location.name}</h2>
          <p>
            {location.address}, {location.city}, {location.state}
          </p>
        </div>
      </header>

      <main>
        {events && events.length > 0 ? (
          events.map((event) => (
            <Event
              key={event.event_id}
              id={event.event_id}
              title={event.title}
              description={event.description}
              date={event.date}
              location={event.location}
              image={event.image}
            />
          ))
        ) : (
          <h2>
            <i className="fa-regular fa-calendar-xmark fa-shake"></i>{" "}
            No events scheduled at this location yet!
          </h2>
        )}
      </main>
    </div>
  );
};

export default LocationEvents;
