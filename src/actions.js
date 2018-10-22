import {api} from './util/api';
export const RESET_LOAN_DATA = "RESET_LOAN_DATA";
export const VALIDATE_LOAN = "VALIDATE_LOAN";

export const changeMessage = (message) => {
  return {type:VALIDATE_LOAN, payload: message};
};

export const validate_loan = function(value){
  return (dispatch)=>{
    const data = {amount:value}
    api.post('validate', data).then((result)=>{
      dispatch(changeMessage(result.message));
    }, error =>{
      dispatch(changeMessage(error));
    });
  };

};

export const reset_loan = function(value){
    return({type:RESET_LOAN_DATA, payload: value});
}
