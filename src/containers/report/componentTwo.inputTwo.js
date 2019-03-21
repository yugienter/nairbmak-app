import React, { Component } from 'react';

import BoxText from '../core/boxText';

class InputTwo extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        ThuocDungDongThoi: null,
        DangBaoChe: null,
        NhaSanXuatThuoc: null,
        LieuDungMotLan: null,
        DuongDung: null,
        NgayBatDau: null,
        NgayKetThuc: null,
        HamLuongThuoc: null,
        SoLo: null,
        SoLanSuDung: null,
        LyDoDungThuoc: null,
      }
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({
      data: {
        ...this.state.data,
        ...value
      }
    }, () => {
      this.props.onData(this.state.data);
    });
  }

  render() {
    return (
      <div className="col-12">
        <div className="row">
          <BoxText
            pop="box secondary"
            title={<p>Thuốc dùng đông thời</p>}
            name="ThuocDungDongThoi"
            hint="Hint"
            onChange={this.onChange}
            size='3'
          />
          <BoxText
            pop="box secondary"
            title={<p>Dạng bào chế</p>}
            name="DangBaoChe"
            hint="Hint"
            onChange={this.onChange}
            size='3'
          />
          <BoxText
            pop="box secondary"
            title={<p>Nhà sản xuất thuốc</p>}
            name="NhaSanXuatThuoc"
            hint="Hint"
            onChange={this.onChange}
            size='3'
          />
          <BoxText
            pop="box secondary"
            title={<p>Liều dùng một lần</p>}
            name="LieuDungMotLan"
            hint="Hint"
            options={['G', 'mg', 'mcg', 'ng', 'UI', 'g/l', 'mg/ml', 'mcg/ml', 'UI/ml']}
            onChange={this.onChange}
            size='3'
          />
          <BoxText
            pop="box secondary"
            title={<p>Đường dùng</p>}
            name="DuongDung"
            hint="Hint"
            onChange={this.onChange}
            size='4'
          />
          <BoxText
            pop="box secondary"
            title={<p>Ngày bắt đầu</p>}
            name="NgayBatDau"
            hint="Hint"
            onChange={this.onChange}
            size='4'
          />
          <BoxText
            pop="box secondary"
            title={<p>Ngày kết thúc</p>}
            name="NgayKetThuc"
            hint="Hint"
            onChange={this.onChange}
            size='4'
          />
          <BoxText
            pop="box secondary"
            title={<p>Hàm lượng thuốc</p>}
            name="HamLuongThuoc"
            hint="Hint"
            options={['G', 'mg', 'mcg', 'ng', 'UI', 'g/l', 'mg/ml', 'mcg/ml', 'UI/ml']}
            onChange={this.onChange}
            size='6'
          />
          <BoxText
            pop="box secondary"
            title={<p>Số lô</p>}
            name="SoLo"
            hint="Hint"
            onChange={this.onChange}
            size='6'
          />
          <BoxText
            pop="box secondary"
            title={<p>Số lần sử dụng</p>}
            name="SoLanSuDung"
            hint="Hint"
            options={['lần/ngày', 'lần/tuẩn', 'lần/tháng']}
            onChange={this.onChange}
            size='6'
          />
          <BoxText
            pop="box secondary"
            title={<p>Lý do dùng thuốc</p>}
            name="LyDoDungThuoc"
            hint="Hint"
            onChange={this.onChange}
            size='6'
          />
        </div>
      </div>
    );
  }
}

export default InputTwo;