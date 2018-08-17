import React, {Component} from 'react';
import '../../styles/AppStyles.css';
import Header from "../common/Header";
import TransactionCard from "../cards/TransactionCard";

class Dashboard extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                    </div>
                    <div className="col-lg-offset-2 col-lg-4">
                        <TransactionCard />
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;