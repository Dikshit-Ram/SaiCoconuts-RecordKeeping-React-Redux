import React, { Component } from "react";
import { connect } from "react-redux";

class HistoryPlay extends Component {
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

  showHistoryPlay() {
    return (
        <div>
            History
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

export default connect(mapStateToProps)(HistoryPlay);
