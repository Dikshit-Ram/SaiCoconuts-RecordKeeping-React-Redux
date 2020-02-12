import React, { Component } from "react";
import Dashboard from "./dashboard/Dashboard";
import "../styles/AppStyles.css";
import { Switch, Route } from "react-router-dom";
import TransactionCard from "./cards/TransactionCard";
import PageNotFound from "./common/PageNotFound";

class App extends Component {
  render() {
    return (
      <div id="dashboard" className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <Dashboard />
            <Switch>
                <Route exact="/" component={Dashboard} />
                <Route exact="/transaction" component={TransactionCard} />
                <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
