'use strict';
module.exports = (sequelize, DataTypes) => {
  var Folder = sequelize.define('Folder', {
    title: DataTypes.STRING
  }, {});
  Folder.associate = function(models) {
    // associations can be defined here
  };
  return Folder;
};