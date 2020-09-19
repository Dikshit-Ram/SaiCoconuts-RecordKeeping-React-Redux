import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../styles/StageStyles.css";
import TransactionPlay from "./TransactionPlay";
import HistoryPlay from "./HistoryPlay";
import CustomerPlay from "./CutomerPlay";

class Stage extends Component {
  render() {
    switch (this.props.show) {
      case "TRANSACTION_PLAY":
        return (
          <div className="container-fluid">
            <TransactionPlay />
          </div>
        );
      case "HISTORY_PLAY":
        return (
          <div className="container-fluid">
            <HistoryPlay />
          </div>
        );
      case "CUSTOMER_PLAY":
        return (
          <div className="container-fluid">
            <CustomerPlay />
          </div>
        );
      default:
        return null;
    }
  }
}

function mapStateToProps(state) {
  return {
    show: state.stage.show,
  };
}

Stage.propTypes = {
  show: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Stage);
