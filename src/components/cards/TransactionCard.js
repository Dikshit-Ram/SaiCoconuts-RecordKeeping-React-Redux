import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as transactionActions from "../../actions/TransactionActions";
import TransactionImage from "../../images/TransactionCard.jpg";

class TransactionCard extends Component {
  onClickDisplayForm() {
    this.props.actions.displayTransactionForm(this.props.show);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="container">
            <div id="TransactionCard" className="card">
              <img
                className="card-img-top"
                src={TransactionImage}
                alt="Transaction Image"
              />
              <div className="card-body">
                <a
                  href="#"
                  className="btn btn-primary"
                  onClick={this.onClickDisplayForm.bind(this)}
                >
                  Quick Sell
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    show: state.stage.show,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(transactionActions, dispatch),
  };
}

TransactionCard.propTypes = {
  show: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionCard);
