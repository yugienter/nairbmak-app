import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setIPFS } from 'modules/ipfs.reducer';

import ComponentOne from './componentOne';
import ComponentTwo from './componentTwo';
import ComponentThree from './componentThree';
import ComponentFour from './componentFour';


class Report extends Component {
  constructor() {
    super();

    this.state = {
      reset: true,
      successMsg: null,
      errorMsg: null
    }

    this.data = {};
    this.reset = this.reset.bind(this);
    this.submit = this.submit.bind(this);
    this.message = this.message.bind(this);
    this.onData = this.onData.bind(this);
  }

  reset() {
    this.setState({ reset: false }, () => {
      this.setState({ reset: true });
    });
  }

  submit() {
    this.props.setIPFS(this.data).then(re => {
      this.setState({
        successMsg: re.path,
        errorMsg: null
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
    return <p className="success-msg italic">{this.state.successMsg}</p>
  }

  onData(re) {
    this.data = { ...this.data, ...re };
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
  ipfs: state.ipfs
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setIPFS: (data) => setIPFS(data)
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Report);