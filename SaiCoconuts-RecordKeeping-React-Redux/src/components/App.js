import React, {Component, PropTypes} from 'react';
import Header from "./common/Header";
import Dashboard from "./dashboard/Dashboard";

class App extends Component {
    render(){
        return(
            <div className="container-fluid">
                <Header/>
                <Dashboard/>
                <p>{this.props.children}</p>
            </div>
        );
    }
}
// noinspection JSAnnotator
App.propTypes = {
    children: PropTypes.object.isRequired
};
export default App;
