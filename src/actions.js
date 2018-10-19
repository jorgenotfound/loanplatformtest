import {api} from './util/api';
export const RESET_LOAN_DATA = "RESET_LOAN_DATA";
export const VALIDATE_LOAN = "VALIDATE_LOAN";

export const validate_loan = function(value){
    return {type:VALIDATE_LOAN, payload: api.test(value)};
};

export const reset_loan = function(value){
    return({type:RESET_LOAN_DATA, payload: value});
}
