'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sightings', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      created_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      bear_type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      num_bears: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      zip_code: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      notes: {
        allowNull: true,
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Sightings');
  }
};
