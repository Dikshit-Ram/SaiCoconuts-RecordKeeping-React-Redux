import React, { Component } from "react";
import Header from "./common/Header";
import Dashboard from "./dashboard/Dashboard";
import Stage from "./PlayArea/Stage";
import "../styles/AppStyles.css";
import CoconutImage from "../images/Coconut.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div
          id="app"
          className="container-fluid"
          style={{
            backgroundImage: "url(" + CoconutImage + ")",
            backgroundSize: "contain",
          }}
        >
          <div className="row">
              <Dashboard />
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 bg-dark text-white">
              <Stage />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
