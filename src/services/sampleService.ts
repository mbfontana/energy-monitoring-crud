import { Sample } from "../models";
import { SampleInstance } from "../models/Sample";

export const sampleService = {
  save: async (collectedData?: SampleInstance) => {
    return await Sample.create(collectedData);
  },
};
