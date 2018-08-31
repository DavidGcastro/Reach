const router = require('express').Router();
const axios = require('axios');
const CircularJSON = require('circular-json');

router.get('/:difficulty', (req, res, next) => {
  let difficulty = req.params.difficulty;
  axios
    .get(
      `http://app.linkedin-reach.io/words?difficulty=${difficulty}&minLength=3&maxLength=10&start=0&count=500`
    )
    .then(response => {
      let json = CircularJSON.stringify(response.data);
      return json;
    })
    .then(words => res.send(words))
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
