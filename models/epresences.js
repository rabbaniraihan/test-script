'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class epresences extends Model {
    static associate(models) {
      epresences.belongsTo(models.users, {foreignKey : 'id_users'})
    }
  }
  epresences.init({
    id_users: DataTypes.INTEGER,
    type: DataTypes.BOOLEAN,
    is_approve: DataTypes.BOOLEAN,
    waktu: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'epresences',
  });
  return epresences;
};