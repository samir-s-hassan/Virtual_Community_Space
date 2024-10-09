import React from "react";
import { useRoutes, Link } from "react-router-dom";
import Locations from "./pages/Locations";
import LocationEvents from "./pages/LocationEvents";
import Events from "./pages/Events";
import "./App.css";

const App = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Locations />,
    },
    {
      path: "/spotifycampnou",
      element: <LocationEvents locationId={1} />,
    },
    {
      path: "/stadiosansiro",
      element: <LocationEvents locationId={2} />,
    },
    {
      path: "/metlifestadium",
      element: <LocationEvents locationId={3} />,
    },
    {
      path: "/lumenfield",
      element: <LocationEvents locationId={4} />,
    },
    {
      path: "/events",
      element: <Events />,
    },
  ]);

  return (
    <div className="app">
      <header className="main-header">
        <h1>UnityGrid Plaza</h1>

        <div className="header-buttons">
          <Link to="/" role="button">
            Home
          </Link>
          <Link to="/events" role="button">
            Events
          </Link>
        </div>
      </header>

      <main>{element}</main>
    </div>
  );
};

export default App;
