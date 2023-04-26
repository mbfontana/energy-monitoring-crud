import express from "express";
import { sampleController } from "./controller/sampleController";
import { connectedController } from "./controller/connectedController";
import { disconnectedController } from "./controller/disconnectedController";

const router = express.Router();

router.post("/samples", sampleController.insert);

router.post("/connected", connectedController.insert);

router.post("/disconnected", disconnectedController.insert);

export { router };
