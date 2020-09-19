import React, { Component } from "react";
import "../../styles/AppStyles.css";
import HistoryCard from "../cards/HistoryCard";
import TransactionCard from "../cards/TransactionCard";

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-offset-2 col-sm-4">
            <TransactionCard />
          </div>
          <div className="col-sm-offset-2 col-sm-4">
            <HistoryCard />
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
