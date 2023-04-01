import { Appliance } from "./Appliance";
import { Sample } from "./Sample";

Appliance.hasMany(Sample, { as: "samples" });

Sample.belongsTo(Appliance);

export { Sample, Appliance };
