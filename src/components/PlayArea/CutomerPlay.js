import React, { Component } from "react";
import { connect } from "react-redux";

class CustomerPlay extends Component {
  showHistoryPlay() {
    return (
        <div>
            Customers
        </div>
    );
  }

  render() {
    return this.showHistoryPlay();
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(CustomerPlay);
