import express from "express";
// import controllers for events and locations
import locationsController from "../controllers/locations";

const locationRouter = express.Router();

// define routes to get locations and location by its ID
locationRouter.get("/", locationsController.getLocations); //since locations is / then this is homepage
locationRouter.get("/locations/:location_id", locationsController.getLocationById); //this is location_id

export default locationRouter;
