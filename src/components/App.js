import React, { Component } from 'react';
import Header from "./common/Header";
import Dashboard from "./dashboard/Dashboard";
import '../styles/AppStyles.css';
import CoconutImage from '../images/CoconutTree.jpg'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div id="dashboard" className="container-fluid" style={{ backgroundImage: 'url(' + CoconutImage + ')' }} >
                <div className="row">
                    <div className="col-lg">
                        <Dashboard />
                    </div>
                </div>
            </div>
            </div>
            
        );
    }
}

export default App;
