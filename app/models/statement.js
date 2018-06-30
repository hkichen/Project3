'use strict';
module.exports = (sequelize, DataTypes) => {
  var Statement = sequelize.define('Statement', {
    date: DataTypes.STRING
  }, {});
  Statement.associate = function(models) {
    // associations can be defined here
  };
  return Statement;
};