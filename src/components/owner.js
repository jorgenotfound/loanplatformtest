import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const OwnerForm = (props) => {
    const { handleSubmit, previousPage } = props
    return (
        <form onSubmit={handleSubmit}>
            <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <Field name="name" placeholder="name" component={FormControl} type="text" />
             </FormGroup>
            <FormGroup>
                <ControlLabel>Social Security Number</ControlLabel>
                <Field name="ssn" placeholder="Social Security number" component={FormControl} type="text" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <Field name="email" placeholder="Email" component={FormControl} type="email" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>City</ControlLabel>
                <Field name="city" placeholder="City" component={FormControl} type="text" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>State</ControlLabel>
                <Field name="state" placeholder="State" component={FormControl} type="text" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Postal code</ControlLabel>
                <Field name="postalCode" placeholder="Postal code" component={FormControl} type="text" />
            </FormGroup>
          <FormGroup className="text-right">
            <Button type="button" className="previous" onClick={previousPage} bsStyle="default">Previous</Button>
            <Button type="submit" className="next" bsStyle="primary">Validate</Button>
          </FormGroup>
        </form>
    );
}

export default reduxForm({
  form: 'loan',
  destroyOnUnmount: false,
})(OwnerForm)
