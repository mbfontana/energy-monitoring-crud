import { Connected } from "../models";
import { ConnectedInstance } from "../models/Connected";

export const connectedService = {
  save: async (collectedData?: ConnectedInstance) => {
    return await Connected.create(collectedData);
  },
};
