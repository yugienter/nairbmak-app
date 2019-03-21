import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from '../header';
import Report from '../report';
import View from '../view';
import Explorer from '../explorer';

class App extends Component {
  render() {
    return (
      <div>
        <div className="status-bar success">
          <p>
            <span className="bold">Network: </span>
            <span className="italic">Mainnet </span>
            <span>- </span>
            <span className="bold">Address: </span>
            <a href="#" className="underline">0x76d8B624eFDDd1e9fC4297F82a2689315ac62d82 </a>
            <span>- </span>
            <span className="bold">WORK: </span>
            <span>100000000000 / </span>
            <span className="bold">STAKE: </span>
            <span>100000000000 / </span>
            <a href="#" className="bold underline">Get my shares</a>
          </p>
        </div>

        <Header />

        <main>
          <Switch>
            <Redirect exact from="/" to="/report" />
            <Route exact path="/report" component={Report} />
            <Route exact path="/view" component={View} />
            <Route exact path="/explorer" component={Explorer} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;