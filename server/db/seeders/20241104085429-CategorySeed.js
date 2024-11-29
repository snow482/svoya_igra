/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Кино",
        },
        {
          name: "Запутанные мысли",
        },
        {
          name: "Что если бы… (СССР)",
        },
        {
          name: "Голливудский баг",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
