import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TransactionPlay from "./TransactionPlay";
import "../../styles/StageStyles.css";

class Stage extends Component {
  render() {
    switch (this.props.show) {
      case "TRANSACTION_PLAY":
        return (
          <div className="container-fluid">
            <TransactionPlay />
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
