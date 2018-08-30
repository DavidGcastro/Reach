const Sequelize = require('sequelize');
const db = require('../index');

const Player = db.define('player', {
  player: {
    type: Sequelize.STRING
  },
  guess: {
    type: Sequelize.INTEGER
  }
});

module.exports = Player;
