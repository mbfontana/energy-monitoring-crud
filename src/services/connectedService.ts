import { Connected } from "../models";
import { ConnectedInstance } from "../models/Connected";

export const connectedService = {
  save: async (connectedTrigger?: ConnectedInstance) => {
    return await Connected.create(connectedTrigger);
  },
};
