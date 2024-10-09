import express from "express";
// import controllers for events and locations
import locationsController from "../controllers/locations";

const locationRouter = express.Router();

// define routes to get locations, location by its ID, and all events at a location
locationRouter.get("/", locationsController.getLocations);
locationRouter.get("/:location_id", locationsController.getLocationById);
locationRouter.get("/:location_id/events", locationsController.getLocationEvents);

export default locationRouter;
