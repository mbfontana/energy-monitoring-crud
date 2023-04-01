import { Request, Response } from "express";
import { sampleService } from "../services/sampleService";

export const sampleController = {
  insert: async (req: Request, res: Response) => {
    const sampledData = req.body;
    try {
      await sampleService.save(sampledData);
      res.status(201).json({ message: "Sampled data sucessfully registered." });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
      throw new Error(
        "Unknown error while trying to insert sampled data into table."
      );
    }
  },
};
