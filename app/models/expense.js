'use strict';
module.exports = (sequelize, DataTypes) => {
  var Expense = sequelize.define('Expense', {
    category: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    avgAmount: {
      type: DataTypes.DECIMAL(10, 2),
      notEmpty: true
    },
    description: {
      type: DataTypes.TEXT,
      notEmpty: true
    }
  });
  Expense.associate = function(models) {
    // associations can be defined here
    Expense.User = Expense.belongsTo(User);
    Expense.Statements = Expense.hasMany(Statement);
  };
  return Expense;
};
