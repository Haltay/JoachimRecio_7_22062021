'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull:     false,
        primaryKey:    true,
        autoIncrement: true,
      },
      email: {
        type: Sequelize.STRING(180),
        allowNull: false,
        unique: true,
      },
      username: {
        type: Sequelize.STRING(60),
        allowNull: false,
        unique: true,
      },
      roles: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: ['USER'],
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
