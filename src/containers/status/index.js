import React, { Component } from 'react';

class Status extends Component {
  constructor() {
    super();

    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
  }

  success() {
    return <div className="status-bar success">
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
  }

  error() {
    return <div className="status-bar error">
      <p>
        <span className="bold">Network: </span>
        <span className="italic">Mainnet </span>
        <span>- </span>
        <a href="#" className="bold underline">Click here to access full features</a>
      </p>
    </div>
  }

  render() {
    return this.error();
  }
}

export default Status;