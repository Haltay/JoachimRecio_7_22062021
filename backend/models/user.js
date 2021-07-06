'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(180),
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'Vous devez saisir un email',
        },
        notEmpty: {
          msg: 'Vous devez saisir un email',
        },
        isEmail: {
          msg: 'Vous devez saisir un email valide',
        },
        async isUnique(email) {
          const user = await User.findOne({ where: { email: email } })
          if (user) {
            throw new Error('Oups, cet email existe déjà');
          }
        }
      }
    },
    username: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'Vous devez saisir un nom d\'utilisateur',
        },
        isValidLength(username) {
          if (username.length < 3) {
            throw new Error('Oups il y a moins de 3 caractères');
          } else if (username.length > 40) {
            throw new Error('La limite est de 40 caractères')
          }
        },
        async isUnique(username) {
          const user = await User.findOne({ where: { username: username } })
          if (user) {
            throw new Error('Cet utilisateur existe déjà');
          }
        }
      }
    },
    roles: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: ['USER'],
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
