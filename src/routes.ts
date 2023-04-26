import express from "express";
import { sampleController } from "./controller/sampleController";
import { connectedController } from "./controller/connectedController";

const router = express.Router();

router.post("/samples", sampleController.insert);

router.post("/connected", connectedController.insert);

export { router };
