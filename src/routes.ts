import express from "express";
import { sampleController } from "./controller/sampleController";
import { connectedController } from "./controller/connectedController";
import { disconnectedController } from "./controller/disconnectedController";
import { applianceController } from "./controller/applianceController";

const router = express.Router();

router.post("/samples", sampleController.insert);

router.get("/appliances", applianceController.getAll);

router.post("/connected", connectedController.insert);
router.get("/consumption/:id", connectedController.consumption);

router.post("/disconnected", disconnectedController.insert);

export { router };
