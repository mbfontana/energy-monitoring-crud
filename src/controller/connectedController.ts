import { Request, Response } from "express";
import { connectedService } from "../services/connectedService";

export const connectedController = {
  insert: async (req: Request, res: Response) => {
    const connectTrigger = req.body;
    try {
      await connectedService.save(connectTrigger);
      res
        .status(201)
        .json({ message: "Connected trigger sucessfully registered." });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
      throw new Error(
        "Unknown error while trying to insert connected trigger into table."
      );
    }
  },
  consume: async (req: Request, res: Response) => {
    const { startDateTime, endDateTime } = req.body;
    try {
      const consume = await connectedService.getConsume(startDateTime, endDateTime);
      res.status(200).json(consume);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
      throw new Error(
        "Unknown error while trying to insert disconnected reference into table."
      );
    }
  },
};
