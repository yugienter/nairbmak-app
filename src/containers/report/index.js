import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ComponentOne from './componentOne';
import ComponentTwo from './componentTwo';
import ComponentThree from './componentThree';
import ComponentFour from './componentFour';


class Report extends Component {
  constructor() {
    super();

    this.data = {};
    this.onData = this.onData.bind(this);
  }

  onData(re) {
    this.data = { ...this.data, ...re };
    // console.log(this.data);
  }

  render() {
    return (
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
              <p className="error-msg italic">Error message should be here</p>
            </div>
            <div className="col-2">
              <button className="my-btn cancel large">Huỷ bỏ</button>
            </div>
            <div className="col-2">
              <button className="my-btn primary large">Báo cáo</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  routing: state.routing
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Report);