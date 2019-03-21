import React, { Component } from 'react';

import Table from '../core/table';
import InputOne from './componentTwo.inputOne';
import InputTwo from './componentTwo.inputTwo';


class ComponentTwo extends Component {
  constructor() {
    super();

    this.openInputOne = this.openInputOne.bind(this);
    this.closeInputOne = this.closeInputOne.bind(this);
    this.saveInputOne = this.saveInputOne.bind(this);
    this.btnOne = {
      deactive: (
        <div className="row justify-content-end">
          <div className="col-2">
            <button className="my-btn primary" onClick={this.openInputOne}>Thêm mới</button>
          </div>
        </div>
      ),
      active: (
        <div className="row justify-content-end">
          <div className="col-2">
            <button className="my-btn cancel" onClick={this.closeInputOne}>Huỷ</button>
          </div>
          <div className="col-2">
            <button className="my-btn secondary" onClick={this.saveInputOne}>Lưu</button>
          </div>
        </div>
      )
    }

    this.openInputTwo = this.openInputTwo.bind(this);
    this.closeInputTwo = this.closeInputTwo.bind(this);
    this.saveInputTwo = this.saveInputTwo.bind(this);
    this.btnTwo = {
      deactive: (
        <div className="row justify-content-end">
          <div className="col-2">
            <button className="my-btn primary" onClick={this.openInputTwo}>Thêm mới</button>
          </div>
        </div>
      ),
      active: (
        <div className="row justify-content-end">
          <div className="col-2">
            <button className="my-btn cancel" onClick={this.closeInputTwo}>Huỷ</button>
          </div>
          <div className="col-2">
            <button className="my-btn secondary" onClick={this.saveInputTwo}>Lưu</button>
          </div>
        </div>
      )
    }


    this.state = {
      one: false,
      btnOne: this.btnOne.deactive,
      two: false,
      btnTwo: this.btnTwo.deactive,
    }
  }

  openInputOne() {
    this.setState({ one: true, btnOne: this.btnOne.active });
  }
  closeInputOne() {
    this.setState({ one: false, btnOne: this.btnOne.deactive });
  }
  saveInputOne() {
    this.setState({ one: false, btnOne: this.btnOne.deactive });
  }

  openInputTwo() {
    this.setState({ two: true, btnTwo: this.btnTwo.active });
  }
  closeInputTwo() {
    this.setState({ two: false, btnTwo: this.btnTwo.deactive });
  }
  saveInputTwo() {
    this.setState({ two: false, btnTwo: this.btnTwo.deactive });
  }

  render() {
    return (
      <div className="row">
        <Table
          title={<p>9. Thuốc nghi ngờ gây phản ứng</p>}
          size='12'
          headers={['Thuốc nghi ngờ', 'Dạng bào chế/hàm lượng', 'Liều dùng', 'Đường dùng', 'Ngày bắt đầu', 'Ngày kết thúc', 'Lý do dùng thuốc']}
          btn={this.state.btnOne}
        />
        <InputOne visible={this.state.one} />

        <Table
          title={<p>12. Các thuốc dùng đồng thời (Ngoại trừ các thuốc dùng điều trị/ khắc phục hậu quả của ADR)</p>}
          size='12'
          headers={['Thuốc đồng thời', 'Dạng bào chế/hàm lượng', 'Liều dùng', 'Đường dùng', 'Ngày bắt đầu', 'Ngày kết thúc', 'Lý do dùng thuốc']}
          btn={this.state.btnTwo}
        />
        <InputTwo visible={this.state.two} />
      </div>
    );
  }
}

export default ComponentTwo;