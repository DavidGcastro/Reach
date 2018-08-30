import axios from 'axios';
const GET_WORD = 'GET_WORD';
const GUESS = 'GUESS';
const RESET_GUESSES = 'RESET_GUESSES';
/**
 * ACTION CREATORS
 */
const getWord = word => ({ type: GET_WORD, word });

export const madeGuess = () => ({
  type: GUESS
});

export const reset = () => ({
  type: RESET_GUESSES
});
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
    .then(pickWord => pickWord[Math.ceil(Math.random() * 200)])
    .then(wordsArr => dispatch(getWord(wordsArr)))
    .then(x => dispatch(reset()))
    .catch(err => console.error(err));

/* REDUCER
 */

export default function(initialState = { guess: 0 }, action) {
  switch (action.type) {
    case GET_WORD:
      return { ...initialState, word: action.word };
    case GUESS:
      return { ...initialState, guess: initialState.guess + 1 };
    case RESET_GUESSES:
      return {
        ...initialState,
        guess: 0
      };

    default:
      return initialState;
  }
}
