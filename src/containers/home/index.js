import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import configs from "configs";
import { increase } from "modules/counter.reducer";

import 'statics/styles/home/home.css';
import logo from 'statics/img/logo.svg';

class Home extends Component {

  componentDidMount() {
    this.props.increase();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {configs.server.ENV}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  routing: state.routing,
  counter: state.counter
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increase: () => increase(1)
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);