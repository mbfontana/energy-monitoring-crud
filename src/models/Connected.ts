import { DataTypes, Model, Optional } from "sequelize";
import { database } from "../database";

export interface Connected {
  id: number;
  realPower: number;
  timeStamp: Date;
  applianceId: number;
}

export interface ConnectedCreationAttributes
  extends Optional<Connected, "id"> {}

export interface ConnectedInstance
  extends Model<Connected, ConnectedCreationAttributes>,
    Connected {}

export const Connected = database.define("Connected", {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  realPower: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  timeStamp: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  applianceId: {
    allowNull: false,
    references: { model: "appliances", key: "id" },
    type: DataTypes.INTEGER,
  },
});
