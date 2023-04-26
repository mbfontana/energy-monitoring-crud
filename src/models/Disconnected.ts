import { DataTypes, Model } from "sequelize";
import { database } from "../database";

export interface Disconnected {
  connectedId: number;
  timeStamp: Date;
}

export interface ConnectedInstance extends Model<Disconnected>, Disconnected {}

export const Disconnected = database.define("Disconnected", {
  connectedId: {
    allowNull: false,
    primaryKey: true,
    references: { model: "connecteds", key: "id" },
    type: DataTypes.INTEGER,
  },
  timeStamp: {
    allowNull: false,
    type: DataTypes.DATE,
  },
});
