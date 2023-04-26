import { Request, Response } from "express";
import { disconnectedService } from "../services/disconnectedService";
import { connectedService } from "../services/connectedService";
import { ConnectedInstance } from "@models/Connected";

export const disconnectedController = {
  insert: async (req: Request, res: Response) => {
    const { applianceId, timeStamp } = req.body;
    try {
      const lastConnection = await connectedService.getLastConnection(
        applianceId
      );
      await disconnectedService.save(lastConnection as ConnectedInstance, timeStamp);
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
