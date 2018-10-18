import React from 'react'
import { Field, reduxForm } from 'redux-form'

const OwnerForm = (props) => {
    const { handleSubmit, previousPage } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <Field name="name" component = {name =>
                    <div>
                      <input type="text" {...name} placeholder="Name"/>
                      {name.touched && name.error && <span>{name.error}</span>}
                    </div>
                } />
             </div>
            <div>
                <label>Social Security Number</label>
                <Field name="ssn" component = {ssn =>
                    <div>
                      <input type="text" {...ssn} placeholder="ssn"/>
                      {ssn.touched && ssn.error && <span>{ssn.error}</span>}
                    </div>
                } />
            </div>
            <div>
                <label>Email</label>
                <Field name="email" component = {email =>
                    <div>
                      <input type="email" {...email} placeholder="email"/>
                      {email.touched && email.error && <span>{email.error}</span>}
                    </div>
                } />
            </div>
            <div>
                <label>City</label>
                <Field name="city" component = {city =>
                    <div>
                      <input type="text" {...city} placeholder="City"/>
                      {city.error && <span>{city.error}</span>}
                    </div>
                } />
            </div>
            <div>
                <label>State</label>
                <Field name="city" component = {state =>
                    <div>
                      <input type="text" {...state} placeholder="State"/>
                      {state.error && <span>{state.error}</span>}
                    </div>
                } />
            </div>
            <div>
                <label>Postal code</label>
                <Field name="postalCode" component = {postalCode =>
                    <div>
                      <input type="text" {...postalCode} placeholder="Postal code"/>
                      {postalCode.error && <span>{postalCode.error}</span>}
                    </div>
                } />
            </div>
          <div>
            <button type="button" className="previous" onClick={previousPage}>Previous</button>
            <button type="submit" className="next">Next</button>
          </div>
        </form>
    );
}

export default reduxForm({
  form: 'loan',
  destroyOnUnmount: false
})(OwnerForm)
