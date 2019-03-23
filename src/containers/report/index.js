import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Util from 'helpers/util.lib';

import { setIPFS } from 'modules/ipfs.reducer';
import { submitReport } from 'modules/database.reducer';

import ComponentOne from './componentOne';
import ComponentTwo from './componentTwo';
import ComponentThree from './componentThree';
import ComponentFour from './componentFour';
import ComponentFive from './componentFive';


class Report extends Component {
  constructor() {
    super();

    this.state = {
      reset: true,
      successMsg: null,
      txId: null,
      errorMsg: null
    }

    this.data = {};
    this.reviewers = [];
    this.reset = this.reset.bind(this);
    this.submit = this.submit.bind(this);
    this.message = this.message.bind(this);
    this.onData = this.onData.bind(this);
    this.onReviewers = this.onReviewers.bind(this);
  }

  reset() {
    this.setState({ reset: false }, () => {
      this.setState({ reset: true });
    });
  }

  submit() {
    this.props.setIPFS(this.data).then(re => {
      this.props.submitReport(Util.decodeIPFSHash(re.hash), this.reviewers).then(txId => {
        this.setState({
          successMsg: re.hash,
          txId: txId,
          errorMsg: null
        });
      }).catch(er => {
        this.setState({
          successMsg: null,
          errorMsg: 'Cannot submit document.'
        });
      });
    }).catch(er => {
      this.setState({
        successMsg: null,
        errorMsg: 'Cannot submit document.'
      });
    });
  }

  message() {
    if (this.state.errorMsg) return <p className="error-msg italic">{this.state.errorMsg}</p>
    if (this.state.successMsg) return <p className="success-msg italic">
      Success!<br />
      {this.state.successMsg}<br />
      {!this.state.txId ? null : <a href={Util.linkTxEtherscan(this.props.work.NETWORK, this.state.txId)} target="_blank" rel="noopener noreferrer">View on Etherscan: {this.state.txId}</a>}
    </p>
    return null;
  }

  onData(re) {
    this.data = { ...this.data, ...re };
  }

  onReviewers(re) {
    this.data = { ...this.data, ...re };
    this.reviewers = re.ThongTinVeNguoiDonViDanhGia.DanhSachChuyenGiaDanhGia;
  }

  render() {
    return (
      !this.state.reset ? null : // Tricky reset components
        <div className="wrapper">
          <div className="container">

            <div className="row">
              <h1 className="col-12">I. THÔNG TIN VỀ PHẢN ỨNG CÓ HẠI (ADR)</h1>
            </div>
            <ComponentOne onData={this.onData} />

            <div className="row">
              <h1 className="col-12">II. THÔNG TIN VỀ THUỐC NGHI NGỜ GÂY ADR</h1>
            </div>
            <ComponentTwo onData={this.onData} />

            <div className="row">
              <h1 className="col-12">III. PHẦN THẨM ĐỊNH ADR CỦA ĐƠN VỊ</h1>
            </div>
            <ComponentThree onData={this.onData} />

            <div className="row">
              <h1 className="col-12">IV. THÔNG TIN VỀ NGƯỜI / ĐƠN VỊ GỬI BÁO CÁO</h1>
            </div>
            <ComponentFour onData={this.onData} />

            <div className="row">
              <h1 className="col-12">V. THÔNG TIN VỀ NGƯỜI / ĐƠN VỊ ĐÁNH GIÁ</h1>
            </div>
            <ComponentFive onData={this.onReviewers} />

            <div className="row">
              <div className="col-8">
                {this.message()}
              </div>
              <div className="col-2">
                <button className="my-btn cancel large" onClick={this.reset}>Huỷ bỏ</button>
              </div>
              <div className="col-2">
                <button className="my-btn primary large" onClick={this.submit}>Báo cáo</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  routing: state.routing,
  work: state.work,
  ipfs: state.ipfs,
  database: state.database
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setIPFS: (data) => setIPFS(data),
  submitReport: (hash, reviewers) => submitReport(hash, reviewers)
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Report);