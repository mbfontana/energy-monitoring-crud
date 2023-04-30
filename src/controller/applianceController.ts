import { applianceService } from "../services/applianceService";
import { Request, Response } from "express";

export const applianceController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const appliances = await applianceService.getAll();
      res.status(200).json(appliances);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
      throw new Error(
        "Unknown error while trying to insert connected trigger into table."
      );
    }
  },
};
