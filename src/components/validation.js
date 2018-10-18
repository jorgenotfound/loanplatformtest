import React from 'react'
import { reduxForm } from 'redux-form'

const ValidationForm = (props) => {
    const { handleSubmit, previousPage } = props
    return(
        <form onSubmit={handleSubmit}>
        <p>Api result message</p>
        <div>
          <button type="button" className="previous" onClick={previousPage}>Previous</button>
          <button type="submit" className="next">New Application</button>
        </div>
        </form>
    );
}

export default reduxForm({
  form: 'loan',
  destroyOnUnmount: false
})(ValidationForm)
