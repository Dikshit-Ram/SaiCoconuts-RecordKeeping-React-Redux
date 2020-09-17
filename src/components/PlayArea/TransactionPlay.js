import React, { Component } from "react";
import { connect } from "react-redux";

class TransactionPlay extends Component {
  render() {
    return (
      <div className="container">
        <div id="TransactionCard" className="card">
          Viola!
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(TransactionPlay);
