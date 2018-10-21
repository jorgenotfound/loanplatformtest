import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './App';

ReactDOM.render(
    <Provider store={configureStore()}>
    <Router>
    <div>
      <Route exact path="/" component={App} />
    </div>
    </Router>
    </Provider>, document.getElementById('root'));
