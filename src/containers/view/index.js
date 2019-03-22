import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ComponentOne from '../report/componentOne';
import ComponentTwo from './componentTwo';
import ComponentThree from '../report/componentThree';
import ComponentFour from '../report/componentFour';


class View extends Component {

  componentDidMount() {
    this.show = this.show.bind(this);
  }

  show() {
    if (!this.state || !this.state.data) return null;

    return (
      <div>
        <div className="row">
          <h1 className="col-12">I. THÔNG TIN VỀ PHẢN ỨNG CÓ HẠI (ADR)</h1>
        </div>
        <ComponentOne />

        <div className="row">
          <h1 className="col-12">II. THÔNG TIN VỀ THUỐC NGHI NGỜ GÂY ADR</h1>
        </div>
        <ComponentTwo />

        <div className="row">
          <h1 className="col-12">III. PHẦN THẨM ĐỊNH ADR CỦA ĐƠN VỊ</h1>
        </div>
        <ComponentThree />

        <div className="row">
          <h1 className="col-12">IV. THÔNG TIN VỀ NGƯỜI / ĐƠN VỊ GỬI BÁO CÁO</h1>
        </div>
        <ComponentFour />
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
                    <input type="text" placeholder="Mã tài liệu" />
                  </div>
                  <div className="col-3">
                    <button className="my-btn primary no-margin">Đọc</button>
                  </div>
                </div>
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
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);