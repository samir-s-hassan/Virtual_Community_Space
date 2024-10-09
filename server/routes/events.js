import express from "express";
// import controller for events
import eventsController from "../controllers/events.js";

const eventsRouter = express.Router();

// define routes to get all events and a specific event by ID
eventsRouter.get("/", eventsController.getEvents); //get all events at /events -> we won't be using this
eventsRouter.get("/l:location_id", eventsController.getEventsByLocationId); //get events at location via /events/l:8
eventsRouter.get("/:event_id", eventsController.getEventById); //get an event by its id at /event/

export default eventsRouter;
