import React from 'react'
import { connect } from 'react-redux';
import OwnerForm from './owner';
import BusinessForm from './business';
import ValidationForm from './validation';
import {validate_loan} from '../actions';

class ConnectedLoanForm extends React.Component {
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.resetForm = this.resetForm.bind(this)
        this.validate = this.validate.bind(this)
        this.state = {
          page: 1,
          loan : {}
        }
    }

    nextPage(values) {
        this.setState({loan: values})
        this.setState({ page: this.state.page + 1 })
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }

    resetForm() {
        this.setState({ page: 1 , loan: {}})
    }

    validate(values){
        this.nextPage(values);
        let amount = this.state.loan.amount
        this.props.validate_loan(amount);

    }

    render (){
        const { page } = this.state
        return (
        <div>
            {page === 1 && <BusinessForm onSubmit={this.nextPage}/>}
            {page === 2 && <OwnerForm previousPage={this.previousPage} onSubmit={this.validate}/>}
            {page === 3 && <ValidationForm onSubmit={this.resetForm}/>}
        </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        form: state.form};
};

const LoanForm = connect(mapStateToProps, {validate_loan})(ConnectedLoanForm);


export default LoanForm;
