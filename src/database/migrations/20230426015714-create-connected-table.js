"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("connecteds", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      real_power: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL,
      },
      time_stamp: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      appliance_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: "appliances", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("connecteds");},
};
