import React from 'react'
import { Field, reduxForm } from 'redux-form'

const BusinessForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Business Name</label>
                <Field name="businessName" component = {businessName =>
                    <div>
                      <input type="text" {...businessName} placeholder="Name"/>
                      {businessName.error && <span>{businessName.error}</span>}
                    </div>
                } />
            </div>
            <div>
                <label>Tax ID</label>
                <Field name="taxId" component = {taxId =>
                    <div>
                      <input type="text" {...taxId} placeholder="Tax ID"/>
                      {taxId.error && <span>{taxId.error}</span>}
                    </div>
                } />
            </div>
            <div>
                <label>Business Address</label>
                <Field name="businessAddress" component = {businessAddress =>
                    <div>
                      <input type="text" {...businessAddress} placeholder="Address"/>
                      {businessAddress.error && <span>{businessAddress.error}</span>}
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
                <button type="submit" className="next">Next</button>
            </div>
        </form>
    );
}

export default reduxForm({
  form: 'loan',
  destroyOnUnmount: false
})(BusinessForm)
