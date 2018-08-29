import axios from 'axios';
const GET_WORD = 'GET_WORD';

/**
 * ACTION CREATORS
 */
const getWord = word => ({ type: GET_WORD, word });

/**
 * THUNK CREATORS
 */
export const getWordAsync = x => dispatch =>
  axios
    .get('http://app.linkedin-reach.io/words', {
      params: {
        difficulty: x.difficulty,
        minLength: x.minLength,
        maxLength: x.maxLength,
        start: 0,
        count: x.count
      }
    })
    .then(res => res.data)
    .then(words => words.split('\n'))
    .then(pickWord => pickWord[Math.ceil(Math.random() * 100)])
    .then(wordsArr => dispatch(getWord(wordsArr)))
    .catch(err => console.error(err));

/**
 * REDUCER
 */

export default function(state = '', action) {
  switch (action.type) {
    case GET_WORD:
      return action.word;
    default:
      return state;
  }
}
