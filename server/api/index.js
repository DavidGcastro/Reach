const router = require('express').Router();

//Map to api files
// starting from /api
router.use('/highScores', require('./highscores'));

module.exports = router;
