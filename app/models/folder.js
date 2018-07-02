'use strict';
module.exports = (sequelize, DataTypes) => {
  var Folder = sequelize.define('Folder', {
    expenseCategory: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    billName: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      notEmpty: true
    },
    dueDate: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    autoPay: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    acctPaidFrom: {
      type: DataTypes.STRING,
      notEmpty: true
    }
  });
  Folder.associate = function(models) {
    // associations can be defined here
    Folder.User = Folder.belongsTo(User);
    Folder.Statements = Folder.hasMany(Statement);
  };
  return Folder;
};
