'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, {
        foreignKey: 'ownerId',
        onDelete: 'CASCADE',
      });
    }
  };
  Post.init({
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Il manque le titre',
        },
        notEmpty: {
          msg: 'Il manque le titre',
        },
        isValidLength(content) {
          if (content.length > 80) {
            throw new Error('C\'est un titre pas un roman (max 80 caractères)');
          }
        },
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Vous devez écrire quelque chose',
        },
        notEmpty: {
          msg: 'Vous devez écrire quelque chose',
        },
        isValidLength(content) {
          if (content.length > 2000) {
            throw new Error('C\'est un peu trop long, au maximum c\'est 2000 caractères');
          }
        },
      }
    },
    image: {
      type: DataTypes.STRING,
    },
    ownerId: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
