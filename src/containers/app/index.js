import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Home from 'containers/home';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Root</Link>
          <Link to="/home">Home</Link>
        </header>

        <main>
          <Switch>
            <Route exact path="/home" component={Home} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;