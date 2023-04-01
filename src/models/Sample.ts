import { DataTypes, Model, Optional } from "sequelize";
import { database } from "../database";

export interface Sample {
  id: number;
  fft01: number;
  fft03: number;
  fft05: number;
  fft07: number;
  fft09: number;
  fft11: number;
  fft13: number;
  fft15: number;
  fft17: number;
  fft19: number;
  fft21: number;
  fft23: number;
  fft25: number;
  fft27: number;
  fft29: number;
  fft31: number;
  applianceId: number;
}

export interface SampleCreationAttributes extends Optional<Sample, "id"> {}

export interface SampleInstance
  extends Model<Sample, SampleCreationAttributes>,
    Sample {}

export const Sample = database.define<SampleInstance, Sample>("Sample", {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  fft01: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  fft03: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  fft05: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  fft07: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  fft09: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  fft11: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  fft13: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  fft15: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  fft17: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  fft19: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  fft21: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  fft23: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  fft25: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  fft27: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  fft29: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  fft31: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  applianceId: {
    allowNull: false,
    references: { model: "appliances", key: "id" },
    type: DataTypes.INTEGER,
  },
});
