"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("disconnecteds", {
      connected_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: "connecteds", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      time_stamp: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("disconnecteds");
  },
};
