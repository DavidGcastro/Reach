const router = require('express').Router();
const axios = require('axios');
const CircularJSON = require('circular-json');

router.get('/', (req, res, next) => {
  axios
    .get('http://app.linkedin-reach.io/words')
    .then(response => {
      let json = CircularJSON.stringify(response.data);
      return json;
    })
    .then(x => x)
    .then(words => res.send(words))
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
