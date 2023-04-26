import { Request, Response } from "express";
import { disconnectedService } from "../services/disconnectedService";

export const disconnectedController = {
  insert: async (req: Request, res: Response) => {
    const connectTrigger = req.body;
    try {
      await disconnectedService.save(connectTrigger);
      res
        .status(201)
        .json({ message: "Disconnected reference sucessfully registered." });
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
