import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

ReactDOM.render(
  <Provider>
    <div className="root">
      <Main />
    </div>
  </Provider>,
  document.getElementById('root')
);
