import express from "express";
// import controller for events
import eventsController from "../controllers/events";

const eventsRouter = express.Router();

// define routes to get all events and a specific event by ID
eventsRouter.get("/", eventsController.getEvents);
eventsRouter.get("/:event_id", eventsController.getEventById);

export default eventsRouter;
