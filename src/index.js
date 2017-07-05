import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from "react-redux";

import './index.css';


import store from './store';

//const store =  createStore(combineReducers);
ReactDOM.render(
  <Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
