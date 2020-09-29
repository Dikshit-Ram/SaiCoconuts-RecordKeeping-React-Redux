import React, { Component } from "react";
import { connect } from "react-redux";

class TransactionPlay extends Component {
  handleInputChange() {}

  createLabel(text, name, type, placeholder = text) {
    return (
      <div className="form-group  col-md-6">
        <label>{text}:</label>
        <input
          name={name}
          type={type}
          className="form-control"
          value={this.state}
          placeholder={placeholder}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }

  showTransactionPlay() {
    return (
      <form>
        <div className="form-row">
          {this.createLabel("Count", "count", "number")}
          {this.createLabel("Item", "item", "number")}
          {this.createLabel("Type", "type", "number")}
        </div>
        <div className="form-row">
          {this.createLabel("Customer", "customer", "text")}
        </div>
        <div className="form-row">
          {this.createLabel("Balance", "balance", "number")}
          {this.createLabel("Paid", "paid", "number")}
        </div>
        <div className="form-row">
          {this.createLabel("Notes", "notes", "text")}
        </div>
        <input type="submit" className="btn btn-primary" value="Save record" />
      </form>
    );
  }

  render() {
    return this.showTransactionPlay();
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(TransactionPlay);
