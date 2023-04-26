import { ConnectedInstance } from "@models/Connected";
import { Disconnected } from "../models";
import { DisconnectedInstance } from "../models/Disconnected";

export const disconnectedService = {
  save: async (lastConnection: ConnectedInstance, timeStamp: string) => {
    const id = lastConnection.id;
    return await Disconnected.create({ connectedId: id, timeStamp: timeStamp });
  },
};
