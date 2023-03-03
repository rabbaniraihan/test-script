'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      users.hasMany(models.epresences, {foreignKey : 'id_users'})
    }
  }
  users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    npp: DataTypes.INTEGER,
    npp_supervisor: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};