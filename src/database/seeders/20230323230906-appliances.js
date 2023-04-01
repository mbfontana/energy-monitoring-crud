"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "appliances",
      [
        {
          name: "Refrigerator",
        },
        {
          name: "Oven",
        },
        {
          name: "Microwave",
        },
        {
          name: "Dishwasher",
        },
        {
          name: "Washing machine",
        },
        {
          name: "Dryer",
        },
        {
          name: "Hairdryer",
        },
        {
          name: "Vacuum cleaner",
        },
        {
          name: "Air conditioner",
        },
        {
          name: "Heater",
        },
        {
          name: "Iron",
        },
        {
          name: "Blender",
        },
        {
          name: "Toaster",
        },
        {
          name: "Coffee maker",
        },
        {
          name: "Kettle",
        },
        {
          name: "Electric fan",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("appliances", null, {});
  },
};
