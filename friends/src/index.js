import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter} from 'react-router-dom';

import {reducer} from './reducers';

const middleware = applyMiddleware(thunk,logger);
const reduxStore = createStore(reducer,middleware);

ReactDOM.render(
<Provider store={reduxStore}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, document.getElementById('root'));

