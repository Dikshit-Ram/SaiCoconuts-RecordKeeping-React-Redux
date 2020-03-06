import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as transactionActions from "../../actions/TransactionActions";
import { bindActionCreators } from "redux";


class TransactionForm extends Component {

  handleSubmit(event) {
    debugger;
    event.preventDefault();
    let transaction = {
      "transactionId": "demoData",
      "consumer": "unknown",
      "sale": 1,
      "paid": 1,
      "transactionDate": "2020-02-18",
      "comment": "demoData"
    };
    this.props.actions.createTransaction(transaction);
  }

  
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Customer:
            <input />
          </label>
          <br />
          <label>
            Count:
            <input type="number" />
          </label>
          <br />
          <label>
            Value Estimate:
            <input type="number" />
          </label>
          <br />
          <label>
            Amount Paid:
            <input type="number" />
          </label>
          <br />

          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    );
  }
}

TransactionForm.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      createTransaction: bindActionCreators(transactionActions.createTransaction, dispatch)
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
