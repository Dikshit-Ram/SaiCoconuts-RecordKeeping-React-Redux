import React from 'react';
import {IndexRoute, Route} from 'react-router';
import Dashboard from "./components/dashboard/Dashboard";
import App from "./components/App";

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard}/>
    </Route>
);