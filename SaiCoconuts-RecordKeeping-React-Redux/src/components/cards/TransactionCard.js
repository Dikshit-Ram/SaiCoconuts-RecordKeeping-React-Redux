import React, {Component} from 'react';
import '../../styles/TransactionCardStyles.css';
import TransactionImage from '../../images/TransactionCard.jpg';

class TransactionCard extends Component{
    render(){
        return(
            <div className="container">
                <div id="TransactionCard" className="card" >
                    <img className="card-img-top" src={TransactionImage} alt="Transaction Image" />
                    <div className="card-body">
                        <a href="#" className="btn btn-primary">Quick Sell</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default TransactionCard;