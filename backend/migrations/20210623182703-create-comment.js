'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comments', {
      id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull:     false,
        primaryKey:    true,
        autoIncrement: true,
      },
      message: {
        type: Sequelize.TEXT,
        allowNull: false
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
      postId: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: {
            tableName: 'posts',
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
    await queryInterface.dropTable('comments');
  }
};
