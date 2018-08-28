import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const GET_WORD = 'GET_WORD';

const initialState = {
  name: '',
  difficulty: 5
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORD:
      return { ...state };
    default:
      return state;
  }
};

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
