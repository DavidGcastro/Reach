const router = require('express').Router();
const { Player } = require('../db/models');

router.get('/', (req, res, next) => {
  Player.findAll({
    order: [['guess']]
  })
    .then(players => res.send(players))
    .catch(next);
});
router.post('/', (req, res, next) => {
  Player.create(req.body)
    .then(created => res.status(201).json(created))
    .catch(next);
});

module.exports = router;
