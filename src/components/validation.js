import React from 'react'
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form'
import { FormGroup, Button, Well } from 'react-bootstrap';

const ConnectedValidationForm = (props) => {
    const { handleSubmit } = props
    return(
        <form onSubmit={handleSubmit}>
        <Well>{ props.message }</Well>
        <FormGroup className="text-center">
          <Button type="submit" className="next">New Application</Button>
        </FormGroup>
        </form>
    );
}

const mapStateToProps = (state) =>{
    return {message: state.loanReducer.message};
};

const ValidationForm = connect(mapStateToProps)(ConnectedValidationForm);

export default reduxForm({
  form: 'loan',
  destroyOnUnmount: false,
})(ValidationForm)
