'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Niveis', [
      {
        descr_nivel: 'Básico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'Intermediário',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'Avançado',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Niveis', null, {});
  }
};
