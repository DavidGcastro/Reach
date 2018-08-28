import axios from 'axios';
const GET_WORD = 'GET_WORD';

/**
 * ACTION CREATORS
 */
const getWord = wordsArr => ({ type: GET_WORD, wordsArr });

/**
 * THUNK CREATORS
 */
export const getWordAsync = () => dispatch =>
  axios
    .get('http://app.linkedin-reach.io/words', {
      params: {
        difficulty: 4,
        minLength: 2,
        maxLength: 10,
        star: 0,
        count: 20
      }
    })
    .then(res => res.data)
    .then(words => words.split('\n'))
    .then(wordsArr => dispatch(getWord(wordsArr)))
    .catch(err => console.error(err));

/**
 * REDUCER
 */

export default function(state = [], action) {
  switch (action.type) {
    case GET_WORD:
      return [...action.wordsArr];
    default:
      return state;
  }
}
