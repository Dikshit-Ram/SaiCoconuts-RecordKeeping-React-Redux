import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as transactionActions from '../../actions/TransactionActions';
import '../../styles/TransactionCardStyles.css';
import TransactionImage from '../../images/TransactionCard.jpg';

class TransactionCard extends Component{

    state = {
        displayForm: false
    }

    onClickDisplayForm() {
        this.props.dispatch(transactionActions.displayTransactionForm(this.state.displayForm));
    }

    render(){
        return(
            <div className="container">
                <div id="TransactionCard" className="card" >
                    <img className="card-img-top" src={TransactionImage} alt="Transaction Image" />
                    <div className="card-body">
                        <a href="#" className="btn btn-primary" onClick={this.onClickDisplayForm.bind(this)}>Quick Sell</a>
                    </div>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state, ownProps) {
    return {
        displayTransactionForm: state.displayForm
    };
}

TransactionCard.propTypes = {
    displayTransactionForm: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(TransactionCard);