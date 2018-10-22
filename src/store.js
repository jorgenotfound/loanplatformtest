import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import loanReducer from './reducers';

export default function configureStore() {
  return createStore(
    combineReducers({ loanReducer, form: formReducer}),
    applyMiddleware(thunk)
  );
}
