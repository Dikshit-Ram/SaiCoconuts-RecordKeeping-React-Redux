import React, {Component, PropTypes} from 'react';
import Header from "./common/Header";

class App extends Component {
    render(){
        return(
            <div className="container-fluid">
                <Header/>
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
