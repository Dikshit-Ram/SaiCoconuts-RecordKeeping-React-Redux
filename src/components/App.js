import React, {Component, PropTypes} from 'react';
import Header from "./common/Header";
import Dashboard from "./dashboard/Dashboard";
import '../styles/AppStyles.css';

class App extends Component {
    render(){
        return(
            <div id="dashboard" className="container-fluid">
                <Header/>
                <div className="row">
                    <div className="col-lg-4">
                        <Dashboard />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
