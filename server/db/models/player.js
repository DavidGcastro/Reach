const Sequelize = require('sequelize');
const db = require('../index');

const Player = db.define('player', {
  name: {
    type: Sequelize.STRING
  },
  score: {
    type: Sequelize.INTEGER
  }
});

module.exports = Player;
