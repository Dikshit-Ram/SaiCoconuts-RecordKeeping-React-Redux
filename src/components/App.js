import React, { Component } from "react";
import Dashboard from "./dashboard/Dashboard";
import "../styles/AppStyles.css";
import "react-toastify/dist/ReactToastify.css";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PageNotFound from "./common/PageNotFound";
import TransactionPage from "./pages/TransactionForm";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="col-lg-4">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/transaction" component={TransactionPage} />
            <Route component={PageNotFound} />
          </Switch>
          <ToastContainer autoClose={3000} hideProgressBar />
        </div>
      </div>
    );
  }
}

export default App;
