'use strict';
module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define('Burger', {
    burgerName: DataTypes.STRING
  }, {});
  Burger.associate = function(models) {
    // associations can be defined here
  };
  return Burger;
};