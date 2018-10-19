import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import loanReducer from './reducers';

const store = createStore(combineReducers({ loanReducer, form: formReducer}));

export default store;
