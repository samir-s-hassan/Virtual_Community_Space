// src/pages/Events.jsx

import React, { useState, useEffect } from "react";
import Event from "../components/Event";
import EventsAPI from "../services/EventsAPI"; // Import your EventsAPI to fetch events
import "../css/Event.css";

const Events = () => {
  const [events, setEvents] = useState([]); // State to hold all events

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const allEvents = await EventsAPI.getAllEvents(); // Fetch all events
        setEvents(allEvents); // Set the events state
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array means this runs only once when the component mounts

  return (
    <div className="events">
      <header>
        <h1>All Events</h1>
        <p>Explore events happening at different locations</p>
      </header>
      <main className="events-list">
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
            <i className="fa-regular fa-calendar-xmark fa-shake"></i> No events
            scheduled yet!
          </h2>
        )}
      </main>
    </div>
  );
};

export default Events;
