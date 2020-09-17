import React, { Component } from "react";
import "../../styles/AppStyles.css";
import TransactionCard from "../cards/TransactionCard";

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-offset-2 col-sm-4">
            <TransactionCard />
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
