'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'Arthur Santana',
        ativo: true,
        email: 'thurzin@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Rafaella Piazza',
        ativo: true,
        email: 'rafa@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Pedro Antonio',
        ativo: true,
        email: 'pedro@gmail.com',
        role: 'trabalhador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Marcia Silva',
        ativo: true,
        email: 'marcia@gmail.com',
        role: 'medica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
