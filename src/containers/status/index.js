import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Clipboard from 'clipboard';
import Wallet from '@kambria/kambria-wallet';
import config from 'configs';
import Util from 'helpers/util.lib';

import { fetchWorkInfo } from '../../modules/work.reducer';
import { fetchStakeInfo } from '../../modules/stake.reducer';

class Status extends Component {
  constructor() {
    super();

    new Clipboard('.copy');

    this.state = {
      register: false,
      web3: null
    }

    this.register = this.register.bind(this);
    this.callback = this.callback.bind(this);
    this.reload = this.reload.bind(this);
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
  }

  register() {
    this.setState({ register: false }, () => {
      this.setState({ register: true });
    });
  }

  callback(er, provider) {
    if (er) throw new Error(er);
    window.kambriaWallet = { web3: provider.web3 };
    this.setState({ register: false, web3: provider.web3 }, () => {
      this.props.fetchWorkInfo();
      this.props.fetchStakeInfo();
    });
  }

  reload() {
    this.props.fetchWorkInfo();
    this.props.fetchStakeInfo();
  }

  success() {
    return <div className="status-bar success">
      <p>
        <span className="bold">Network: </span>
        <span className="italic">{Util.code2Name(this.props.work.NETWORK)} </span>
        <span>- </span>
        <span className="bold">Address: </span>
        <a className="underline copy" data-clipboard-text={this.props.work.ACCOUNT}>{this.props.work.ACCOUNT} </a>
        <span>- </span>
        <span className="bold">WORK: </span>
        <span>{this.props.work.WORK} / </span>
        <span className="bold">STAKE: </span>
        <span>{this.props.stake.STAKE} / </span>
        <a href="#" className="bold underline">Get my shares</a>
        <span onClick={this.reload}> / <i className="fas fa-sync-alt"></i></span>
      </p>
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
  routing: state.routing,
  work: state.work,
  stake: state.stake
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchWorkInfo: () => fetchWorkInfo(),
  fetchStakeInfo: () => fetchStakeInfo()
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Status);