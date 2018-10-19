import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const BusinessForm = (props) => {
    const { handleSubmit, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <FormGroup>
                <ControlLabel>Business Name</ControlLabel>
                <Field name="businessName" placeholder="Business name" component={FormControl} type="text" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Tax ID</ControlLabel>
                <Field name="taxId" placeholder="Tax ID" component={FormControl} type="text" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Business Address</ControlLabel>
                <Field name="businessAddress" placeholder="Address" component={FormControl} type="text" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>City</ControlLabel>
                <Field name="businessCity" placeholder="City" component={FormControl} type="text" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>State</ControlLabel>
                <Field name="businessState" placeholder="State" component={FormControl} type="text"/>
            </FormGroup>
            <FormGroup>
                <ControlLabel>Postal code</ControlLabel>
                <Field name="businessPostalCode" placeholder="Postal code" component={FormControl} type="text" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Amount</ControlLabel>
                <Field name="amount" placeholder="Required amount" component ={FormControl} type="number" />
            </FormGroup>
            <FormGroup className="text-right">
                <Button type="submit" disabled={submitting} bsStyle="primary">Next</Button>
            </FormGroup>
        </form>
    );
}

export default reduxForm({
  form: 'loan',
  destroyOnUnmount: false
})(BusinessForm)
