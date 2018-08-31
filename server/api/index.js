const router = require('express').Router();

//Map to api files

router.use('/highScores', require('./highscores'));
router.use('/words', require('./words'));

module.exports = router;
