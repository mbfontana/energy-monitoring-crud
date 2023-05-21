import { Request, Response } from "express";
import { ConnectedInstance } from "@models/Connected";
import { ApplianceInstance } from "@models/Appliance";
import { DisconnectedInstance } from "@models/Disconnected";
import { connectedService } from "../services/connectedService";
import { applianceService } from "../services/applianceService";
import { disconnectedService } from "../services/disconnectedService";

export const connectedController = {
  insert: async (req: Request, res: Response) => {
    const connectionInfo = req.body;
    try {
      await connectedService.save(connectionInfo);
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
  consumption: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const appliance = (await applianceService.getNameById(
        Number(id)
      )) as ApplianceInstance;
      if (!appliance) {
        throw new Error("Id not found.");
      }

      const lastConnection = (await connectedService.getLastConnection(
        Number(id)
      )) as ConnectedInstance;
      const disconnectedId = Number(lastConnection.id) || 0;
      const lastDisconnection = (await disconnectedService.getLastDisconnection(
        disconnectedId
      )) as DisconnectedInstance;

      const on =
        !!lastConnection &&
        (!lastDisconnection ||
          lastConnection.timeStamp > lastDisconnection.timeStamp);

      const date = new Date();
      const [dailyConsumption, monthlyConsumption] = await Promise.all([
        connectedService.getConsumption(
          Number(id),
          `2023-${date.getMonth() + 1}-${date.getDate()} 00:00:00`,
          `2023-${date.getMonth() + 1}-${date.getDate()} 23:59:59`
        ),
        connectedService.getConsumption(
          Number(id),
          `2023-${date.getMonth() + 1}-01 00:00:00`,
          `2023-${date.getMonth() + 1}-30 23:59:59`
        ),
      ]);

      res.status(200).json({
        id: appliance.id,
        name: appliance.name,
        on,
        lastTimeOn: lastConnection?.timeStamp || "",
        power: Number(lastConnection?.realPower) || 0,
        consumption: {
          daily: {
            total: Number(dailyConsumption[0]?.consume) || 0,
            timeConnected: Number(dailyConsumption[0]?.time_connected) || 0,
          },
          monthly: {
            total: Number(monthlyConsumption[0]?.consume) || 0,
            timeConnected: Number(monthlyConsumption[0]?.time_connected) || 0,
          },
        },
      });
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
