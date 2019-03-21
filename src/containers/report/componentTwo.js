import React, { Component } from 'react';

import Table from '../core/table';
import InputOne from './componentTwo.inputOne';
import InputTwo from './componentTwo.inputTwo';


class ComponentTwo extends Component {
  constructor() {
    super();

    this.onDataOne = this.onDataOne.bind(this);
    this.openInputOne = this.openInputOne.bind(this);
    this.closeInputOne = this.closeInputOne.bind(this);
    this.saveInputOne = this.saveInputOne.bind(this);
    this.removeInputOne = this.removeInputOne.bind(this);
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

    this.onDataTwo = this.onDataTwo.bind(this);
    this.openInputTwo = this.openInputTwo.bind(this);
    this.closeInputTwo = this.closeInputTwo.bind(this);
    this.saveInputTwo = this.saveInputTwo.bind(this);
    this.removeInputTwo = this.removeInputTwo.bind(this);
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
      visibleOne: false,
      btnOne: this.btnOne.deactive,
      tempDataOne: null,
      dataOne: [],
      visibleTwo: false,
      btnTwo: this.btnTwo.deactive,
      tempDataTwo: null,
      dataTwo: [],
    }
  }

  componentDidUpdate() {
    this.props.onData({
      ThongTinVeThuocNghiNgoGayADR: {
        ThuocNghiNgoGayPhanUng: this.state.dataOne,
        CacThuocDongThoi: this.state.dataTwo
      }
    });
  }

  onDataOne(data) {
    this.setState({ tempDataOne: data });
  }
  openInputOne() {
    this.setState({ visibleOne: true, btnOne: this.btnOne.active });
  }
  closeInputOne() {
    this.setState({ tempDataOne: null, visibleOne: false, btnOne: this.btnOne.deactive });
  }
  saveInputOne() {
    let newData = this.state.dataOne;
    newData.push(this.state.tempDataOne);
    this.setState({ dataOne: newData }, () => {
      this.closeInputOne();
    });
  }
  removeInputOne(i) {
    let newData = this.state.dataOne;
    newData.splice(i, 1);
    this.setState({ dataOne: newData });
  }

  onDataTwo(data) {
    this.setState({ tempDataTwo: data });
  }
  openInputTwo() {
    this.setState({ visibleTwo: true, btnTwo: this.btnTwo.active });
  }
  closeInputTwo() {
    this.setState({ tempDataTwo: null, visibleTwo: false, btnTwo: this.btnTwo.deactive });
  }
  saveInputTwo() {
    var newData = this.state.dataTwo;
    newData.push(this.state.tempDataTwo);
    this.setState({ dataTwo: newData }, () => {
      this.closeInputTwo();
    });
  }
  removeInputTwo(i) {
    let newData = this.state.dataTwo;
    newData.splice(i, 1);
    this.setState({ dataTwo: newData });
  }

  render() {
    return (
      <div className="row">
        <Table
          viewOnly={false}
          title={<p>9. Thuốc nghi ngờ gây phản ứng</p>}
          size='12'
          headers={['Thuốc nghi ngờ', 'Dạng bào chế', 'Hàm lượng', 'Liều dùng', 'Đường dùng', 'Ngày bắt đầu', 'Ngày kết thúc', 'Lý do dùng thuốc']}
          keys={['ThuocNghiNgo', 'DangBaoChe', 'HamLuongThuoc', 'LieuDungMotLan', 'DuongDung', 'NgayBatDau', 'NgayKetThuc', 'LyDoDungThuoc']}
          btn={this.state.btnOne}
          remove={this.removeInputOne}
          data={this.state.dataOne}
        />
        {this.state.visibleOne ? <InputOne onData={this.onDataOne} /> : null}

        <Table
          viewOnly={false}
          title={<p>10. Các thuốc dùng đồng thời (Ngoại trừ các thuốc dùng điều trị/ khắc phục hậu quả của ADR)</p>}
          size='12'
          headers={['Thuốc dùng đồng thời', 'Dạng bào chế', 'Hàm lượng', 'Liều dùng', 'Đường dùng', 'Ngày bắt đầu', 'Ngày kết thúc', 'Lý do dùng thuốc']}
          keys={['ThuocDungDongThoi', 'DangBaoChe', 'HamLuongThuoc', 'LieuDungMotLan', 'DuongDung', 'NgayBatDau', 'NgayKetThuc', 'LyDoDungThuoc']}
          btn={this.state.btnTwo}
          remove={this.removeInputTwo}
          data={this.state.dataTwo}
        />
        {this.state.visibleTwo ? <InputTwo onData={this.onDataTwo} /> : null}
      </div>
    );
  }
}

export default ComponentTwo;