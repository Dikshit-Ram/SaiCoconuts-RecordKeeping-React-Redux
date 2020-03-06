import React, { Component } from "react";
import { connect } from "react-redux";
import * as transactionActions from "../../actions/TransactionActions";
import "../../styles/TransactionCardStyles.css";
import TransactionImage from "../../images/TransactionCard.jpg";
import PropTypes from "prop-types";

class TransactionCard extends Component {
  onClickDisplayForm() {
    this.props.dispatch(
      transactionActions.displayTransactionForm(
        this.state.displayTransactionForm
      )
    );
  }

  render() {
    return (
      <div className="container">
        <div id="TransactionCard" className="card">
          <img
            className="card-img-top"
            src={TransactionImage}
            alt="Transaction Image"
          />
          <div className="card-body">
            <a
              href="/transaction"
              className="btn btn-primary"
              onClick={this.onClickDisplayForm}
            >
              Quick Sell
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    displayTransactionForm: state.displayTransactionForm
  };
}

TransactionCard.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(TransactionCard);
