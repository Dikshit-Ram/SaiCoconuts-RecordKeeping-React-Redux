import React, { Component } from "react";
import "../../styles/AppStyles.css";
import TransactionCard from "../cards/TransactionCard";

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <TransactionCard />
        </div>
      </div>
    );
  }
}
export default Dashboard;
