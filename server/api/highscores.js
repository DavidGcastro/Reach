const router = require('express').Router();
const { Player } = require('../db/models');

router.get('/', (req, res, next) => {
  Player.findAll({
    order: [['guess']],
    limit: 6
  })
    .then(players => res.send(players))
    .catch(next);
});
router.post('/', (req, res, next) => {
  Player.create({ player: req.body.player, guess: req.body.guess })
    .then(created => res.status(201).json(created))
    .catch(next);
});

module.exports = router;
