import { Disconnected } from "../models";
import { DisconnectedInstance } from "../models/Disconnected";

export const disconnectedService = {
  save: async (disconnectedReference?: DisconnectedInstance) => {
    return await Disconnected.create(disconnectedReference);
  },
};
