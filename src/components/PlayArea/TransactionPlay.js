import React, { Component } from "react";
import { connect } from "react-redux";

class TransactionPlay extends Component {
  handleInputChange() {}

  createLabel(text, name, type) {
    return (
      <div className="form-group">
        <label>
          {text}:
          <input
            name={name}
            type={type}
            value={this.state}
            onChange={this.handleInputChange}
          />
        </label>
      </div>
    );
  }

  showTransactionPlay() {
    return (
        <form>
          {this.createLabel("Count", "count", "number")}
          {this.createLabel("Item", "item", "number")}
          {this.createLabel("Type", "type", "number")}
          {this.createLabel("Customer", "customer", "number")}
          {this.createLabel("Balance", "balance", "number")}
          {this.createLabel("Paid", "paid", "number")}
          {this.createLabel("Notes", "notes", "text")}
          <input type="submit" value="Submit" />
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
