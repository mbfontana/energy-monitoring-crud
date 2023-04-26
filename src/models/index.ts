import { Appliance } from "./Appliance";
import { Connected } from "./Connected";
import { Disconnected } from "./Disconnected";
import { Sample } from "./Sample";

Appliance.hasMany(Sample, { as: "samples" });
Appliance.hasMany(Connected, { as: "connected" });

Sample.belongsTo(Appliance);
Connected.belongsTo(Appliance);

export { Sample, Appliance, Connected, Disconnected };
