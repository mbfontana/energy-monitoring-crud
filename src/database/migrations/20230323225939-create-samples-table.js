"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("samples", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      fft01: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL,
      },
      fft03: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL,
      },
      fft05: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL,
      },
      fft07: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL,
      },
      fft09: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL,
      },
      fft11: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL,
      },
      fft13: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL,
      },
      fft15: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL,
      },
      fft17: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL,
      },
      fft19: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL,
      },
      fft21: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL,
      },
      fft23: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL,
      },
      fft25: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL,
      },
      fft27: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL,
      },
      fft29: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL,
      },
      fft31: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL,
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
    await queryInterface.dropTable("samples");
  },
};
