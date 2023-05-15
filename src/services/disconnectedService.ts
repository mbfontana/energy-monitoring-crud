import { ConnectedInstance } from "@models/Connected";
import { Disconnected } from "../models";
import { DisconnectedInstance } from "../models/Disconnected";

export const disconnectedService = {
  save: async (lastConnection: ConnectedInstance, timeStamp: string) => {
    const id = lastConnection.id;
    console.log(id);
    console.log(timeStamp);
    return await Disconnected.create({ connectedId: id, timeStamp: timeStamp });
  },
  getLastDisconnection: async (connectionId: number) => {
    return await Disconnected.findOne({
      where: { connected_id: connectionId },
      order: [["time_stamp", "DESC"]],
    });
  },
};
