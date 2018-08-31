const router = require('express').Router();

//Map to api files
// starting from /api
router.use('/highScores', require('./highscores'));
router.use('/words', require('./words'));

module.exports = router;
