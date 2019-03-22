import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getIPFS } from 'modules/ipfs.reducer';

import ComponentOne from './componentOne';
import ComponentTwo from './componentTwo';
import ComponentThree from './componentThree';
import ComponentFour from './componentFour';


class View extends Component {
  constructor() {
    super();

    this.state = {
      hash: '',
      data: null,
      error: null
    }

    this.onChange = this.onChange.bind(this);
    this.find = this.find.bind(this);
  }

  componentDidMount() {
    this.show = this.show.bind(this);
  }

  onChange(e) {
    this.setState({
      hash: e.target.value
    });
  }

  find() {
    this.props.getIPFS(this.state.hash).then(re => {
      this.setState({ data: re, error: null });
    }).catch(er => {
      this.setState({ data: null, error: 'Cannot load document' });
    })
  }

  error() {
    if (this.state.error) return <div className="row">
      <div className="col-12">
        <p className="error-msg-plain italic">{this.state.error}</p>
      </div>
    </div>
    return null
  }

  show() {
    if (!this.state || !this.state.data) return null;

    return (
      <div>
        <div className="row">
          <h1 className="col-12">I. THÔNG TIN VỀ PHẢN ỨNG CÓ HẠI (ADR)</h1>
        </div>
        <ComponentOne data={this.state.data} />

        <div className="row">
          <h1 className="col-12">II. THÔNG TIN VỀ THUỐC NGHI NGỜ GÂY ADR</h1>
        </div>
        <ComponentTwo data={this.state.data} />

        <div className="row">
          <h1 className="col-12">III. PHẦN THẨM ĐỊNH ADR CỦA ĐƠN VỊ</h1>
        </div>
        <ComponentThree data={this.state.data} />

        <div className="row">
          <h1 className="col-12">IV. THÔNG TIN VỀ NGƯỜI / ĐƠN VỊ GỬI BÁO CÁO</h1>
        </div>
        <ComponentFour data={this.state.data} />
      </div>
    )
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">

          <div className="row">
            <div className="col-6">
              <div className="box">
                <div className="row">
                  <div className="col">
                    <p>Tìm tài liệu</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-9">
                    <input type="text" placeholder="Mã tài liệu" onChange={this.onChange} value={this.state.hash} />
                  </div>
                  <div className="col-3">
                    <button className="my-btn primary no-margin" onClick={this.find}>Đọc</button>
                  </div>
                </div>
                {this.error()}
              </div>
            </div>
            <div className="col-6">
              <div className="box">
                <div className="row">
                  <div className="col">
                    <p>Hoạt động với tài liệu</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <button className="my-btn secondary no-margin">Mua</button>
                  </div>
                  <div className="col-4">
                    <button className="my-btn primary no-margin">Nhận xét</button>
                  </div>
                  <div className="col-4">
                    <button className="my-btn primary no-margin">Đóng</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {this.show()}

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
  getIPFS: (hash) => getIPFS(hash)
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);