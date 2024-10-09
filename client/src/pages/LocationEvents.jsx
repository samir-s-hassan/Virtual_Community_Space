import React, { useState, useEffect } from "react";
import Event from "../components/Event";
import "../css/LocationEvents.css";

const LocationEvents = ({ index }) => {
  const [location, setLocation] = useState([]);
  const [events, setEvents] = useState([]);

  return (
    <div className="location-events">
      <header>
        <div className="location-image">
          <img src={location.image} />
        </div>

        <div className="location-info">
          <h2>{location.name}</h2>
          <p>
            {location.address}, {location.city}, {location.state}{" "}
          </p>
        </div>
      </header>

      <main>
        {events && events.length > 0 ? (
          events.map((event, index) => (
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
            {"No events scheduled at this location yet!"}
          </h2>
        )}
      </main>
    </div>
  );
};

export default LocationEvents;
