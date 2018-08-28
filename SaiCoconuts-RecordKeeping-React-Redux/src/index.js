import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Router} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/ConfigureStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import routes from "./routes";

const store = configureStore();
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
