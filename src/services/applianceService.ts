import { Appliance } from "../models";

export const applianceService = {
  getAll: async () => {
    return await Appliance.findAll();
  },
  getNameById: async (id: number) => {
    return await Appliance.findByPk(id);
  },
};
