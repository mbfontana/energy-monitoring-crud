import { Appliance } from "./Appliance";
import { Connected } from "./Connected";
import { Disconnected } from "./Disconnected";
import { Sample } from "./Sample";

Appliance.hasMany(Sample, { as: "samples" });
Appliance.hasMany(Connected, { as: "connected" });
Disconnected.hasOne(Connected, { as: "disconnected" });

Sample.belongsTo(Appliance);
Connected.belongsTo(Appliance);

export { Sample, Appliance, Connected, Disconnected };
