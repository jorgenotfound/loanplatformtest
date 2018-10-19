import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LoanForm from "./components/loan";
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

const BrowserHistory = createBrowserHistory();

class ConnectedApp extends Component {

  render() {
    return (
      <div className="App">
        <Grid>
        <Row>
            <Col sm={6} smOffset={3} className="text-center">
            <PageHeader>
              Loan Platform <small>LendingFront</small>
            </PageHeader>
            </Col>
        </Row>
        <Row>
            <Col sm={4} smOffset={4}>
            <HashRouter history={BrowserHistory} >
              <Route path="/" component={LoanForm} />
            </HashRouter>
            </Col>
        </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
    return {hello: state.hello};
};

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
