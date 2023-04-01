import { DataTypes, Model, Optional } from "sequelize";
import { database } from "../database";

export interface Appliance {
  id: number;
  name: string;
}

export interface ApplianceCreationAttributes
  extends Optional<Appliance, "id"> {}

export interface ApplianceInstance
  extends Model<Appliance, ApplianceCreationAttributes>,
    Appliance {}

export const Appliance = database.define("Appliance", {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});
