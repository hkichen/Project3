'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      //define your associations here
    )

    .then(() => {
      //complete promise here
    }) 
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
    )
  }
};
