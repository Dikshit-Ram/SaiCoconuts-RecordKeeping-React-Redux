import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../styles/StageStyles.css";
import TransactionPlay from "./TransactionPlay";
import HistoryPlay from "./HistoryPlay";
import CustomerPlay from "./CutomerPlay";

class Stage extends Component {

  getPlayOnStage() {
    switch (this.props.show) {
      case "TRANSACTION_PLAY":
        return <TransactionPlay />
      case "HISTORY_PLAY":
        return <HistoryPlay />
      case "CUSTOMER_PLAY":
        return <CustomerPlay />
      default:
        return null;
    }
  }

  render() {
      return this.getPlayOnStage()
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