import {RESET_LOAN_DATA, VALIDATE_LOAN} from './actions'

const initialState = {
  hello: 'helloooo',
  owner: {
      name:'',
      ssn:'',
      email:'',
      city:'',
      state:'',
      postalCode:''
  },
  business:{
      businessNamename:'',
      businessAddress:'',
      taxId:'',
      city:'',
      state:'',
      postalCode:'',
      amount: 10
  },
  message:'Please submit a new Application'
};

const loanReducer = (state = initialState, action) => {
    if(action.type === VALIDATE_LOAN){
        return {message:action.payload};
    }
    if(action.type === RESET_LOAN_DATA){
        return initialState;
    }
    return state;
};
export default loanReducer;
