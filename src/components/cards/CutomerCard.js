import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as customerActions from "../../actions/CustomerActions";
import CutomerImage from "../../images/CustomerCard.png";
import "../../styles/CardStyles.css"

class CustomerCard extends Component {
  onClickDisplayForm() {
    this.props.actions.displayCustomers(this.props.show);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="container">
            <div id="CustomerCard" className="card">
              <img
                className="card-img-top"
                src={CutomerImage}
                alt="Customer Image"
              />
              <div className="card-body">
                <a
                  href="#"
                  className="btn btn-primary"
                  onClick={this.onClickDisplayForm.bind(this)}
                >
                  Customers
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
    actions: bindActionCreators(customerActions, dispatch),
  };
}

CustomerCard.propTypes = {
  show: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerCard);
