import { Sequelize } from "sequelize";

export const database = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "energy_monitoring_dev",
  username: "energy_monitoring",
  password: "energy_monitoring",
  define: {
    timestamps: false,
    underscored: true,
  },
});
