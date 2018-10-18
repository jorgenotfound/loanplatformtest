import React, { Component, PropTypes } from 'react'
import OwnerForm from './owner';
import BusinessForm from './business';
import ValidationForm from './validation';

class LoanForm extends React.Component {
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.resetForm = this.resetForm.bind(this)
        this.state = {
          page: 1
        }
    }

    nextPage() {
        this.setState({ page: this.state.page + 1 })
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }

    resetForm() {
        this.setState({ page: 1 })
    }

    render (){
        const { page } = this.state
        return (<div>
            {page === 1 && <BusinessForm onSubmit={this.nextPage}/>}
            {page === 2 && <OwnerForm previousPage={this.previousPage} onSubmit={this.nextPage}/>}
            {page === 3 && <ValidationForm previousPage={this.previousPage} onSubmit={this.resetForm}/>}
          </div>
        )
    }
}


export default LoanForm;
