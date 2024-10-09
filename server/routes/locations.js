import express from "express";
// import controllers for events and locations
import locationsController from "../controllers/locations.js";

const locationsRouter = express.Router();

// define routes to get locations and location by its ID
locationsRouter.get("/", locationsController.getLocations); //since locations is / then this is homepage
locationsRouter.get("/:location_id", locationsController.getLocationById); //this is location_id

export default locationsRouter;
