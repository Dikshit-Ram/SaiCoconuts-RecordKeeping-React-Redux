import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Router} from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import routes from "./routes";

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);
