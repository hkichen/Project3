const db = require('../models');

module.exports = {
  update: function(req, res) {
    db.Expense.update(req.body)
      .then(dbExpense => res.json(dbExpense))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.Expense.findAll({})
      .then(dbExpense => res.json(dbExpense))
      .catch(err => res.status(422).json(err));
  }
};
