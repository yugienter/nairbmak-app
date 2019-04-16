import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Clipboard from 'clipboard';
import Wallet from 'capsule-wallet-tomo';
import config from 'configs';
import Util from 'helpers/util.lib';

import { fetchWorkInfo } from '../../modules/work.reducer';
import { fetchStakeInfo } from '../../modules/stake.reducer';
import { share } from '../../modules/distribution.reducer';

var TIMER = null;

class Status extends Component {
  constructor() {
    super();

    new Clipboard('.copy');

    this.state = {
      txId: null,
      register: false,
      web3: null
    }

    this.register = this.register.bind(this);
    this.callback = this.callback.bind(this);
    this.reload = this.reload.bind(this);
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
    this._share = this._share.bind(this);
  }

  register() {
    this.setState({ register: false }, () => {
      this.setState({ register: true });
    });
  }

  callback(er, provider) {
    if (er) throw new Error(er);
    this.setState({ register: false, web3: provider.web3 }, () => {
      this.props.fetchWorkInfo().then(this.props.fetchStakeInfo);
    });
  }

  reload() {
    this.props.fetchWorkInfo();
    this.props.fetchStakeInfo();
  }

  _share() {
    this.props.share().then(txId => {
      this.setState({ txId: txId }, () => {
        if (TIMER) {
          clearTimeout(TIMER);
          TIMER = null;
        }
        TIMER = setTimeout(() => {
          this.setState({ txId: null })
        }, 10000); // clear tx after 10s
      });
    }).catch(er => {
      console.error(er);
    });
  }

  success() {
    return <div>
      <div className="status-bar success">
        <p>
          <span className="bold underline" onClick={this.reload}><i className="fas fa-sync-alt"></i> Reload</span>
          <span> / </span>
          <span className="bold">Network: </span>
          <span className="italic">{Util.code2Name(this.props.work.NETWORK)} </span>
          <span>- </span>
          <span className="bold">Address: </span>
          <a className="underline copy" data-clipboard-text={this.props.work.ACCOUNT}>{this.props.work.ACCOUNT} </a>
          <span>- </span>
          <span className="bold">WORK: </span>
          <span>{this.props.work.WORK}</span>
          <span> / </span>
          <span className="bold">STAKE: </span>
          <span>{this.props.stake.STAKE}</span>
          <span> / </span>
          <a onClick={this._share} className="bold underline">Get my shares</a>
        </p>
      </div>
      {
        !this.state.txId ? null : <div className="status-bar info">
          <a href={Util.linkTxScan(this.props.work.NETWORK, this.state.txId)} target="_blank" rel="noopener noreferrer">View on Scan: {this.state.txId}</a>
        </div>
      }
    </div>
  }

  error() {
    return <div className="status-bar error">
      <p>
        <span className="bold">Network: </span>
        <span className="italic">{Util.code2Name(config.eth.NETWORK)} </span>
        <span>- </span>
        <a onClick={this.register} className="bold underline">Click here to access full features!</a>
      </p>
      <Wallet visible={this.state.register} net={config.eth.NETWORK} done={this.callback} />
    </div>
  }

  render() {
    if (!this.state.web3)
      return this.error();
    return this.success();
  }
}

const mapStateToProps = state => ({
  work: state.work,
  stake: state.stake,
  distribution: state.distribution
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchWorkInfo: () => fetchWorkInfo(),
  fetchStakeInfo: () => fetchStakeInfo(),
  share: () => share(),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Status);