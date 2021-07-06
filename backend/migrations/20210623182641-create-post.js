'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull:     false,
        primaryKey:    true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
      },
      ownerId: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id',
        }
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
    await queryInterface.dropTable('posts');
  }
};
