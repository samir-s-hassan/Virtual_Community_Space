// src/pages/Events.jsx

import React from "react";
import Event from "../components/Event";
import "../css/Event.css";

const Events = ({ eventIds }) => {
  return (
    <div className="events">
      <header>
        <h1>All Events</h1>
        <p>Explore events happening at different locations</p>
      </header>
      <main className="events-list">
        {eventIds && eventIds.length > 0 ? (
          eventIds.map((id) => (
            <Event key={id} id={id} />
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
