import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoanForm from "./components/loan";

class ConnectedApp extends Component {
    state = {
        'owner': {},
        'business':{},
        'amount': 0
    }
  render() {
    return (
      <div className="App">
        <header>
        <h1>Loan platform</h1>
        </header>
        <p>{this.props.hello}</p>
        <LoanForm />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {};

const mapStateToProps = (state) =>{
    return {hello: state.hello};
};

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
