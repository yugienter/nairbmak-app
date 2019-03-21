import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ComponentOne from './componentOne';
import ComponentTwo from './componentTwo';
import ComponentThree from './componentThree';
import ComponentFour from './componentFour';

import { increase } from '../../modules/counter.reducer';


class Report extends Component {

  componentDidMount() {
    this.props.increase();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">

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

          <div className="row justify-content-end">
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
  routing: state.routing,
  counter: state.counter
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increase: () => increase(1)
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Report);