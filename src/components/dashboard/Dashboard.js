import React, { Component } from "react";
import "../../styles/AppStyles.css";
import HistoryCard from "../cards/HistoryCard";
import TransactionCard from "../cards/TransactionCard";
import CutomerCard from "../cards/CutomerCard";

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <TransactionCard />
          </div>
          <div className="col-md-4">
            <HistoryCard />
          </div>
          <div className="col-md-4">
            <CutomerCard />
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
