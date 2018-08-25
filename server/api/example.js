const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('Hello world');
  next();
});

module.exports = router;
