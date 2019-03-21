import React, { Component } from 'react';
import CheckboxText from '../core/checkboxText';
import BoxText from '../core/boxText';


class ComponentFour extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        HoVaTen: null,
        Email: null,
        DienThoai: null,
        NgheNghiep: null,
        DangBaoCao: null,
        NgayBaoCao: null,
        TenDonViBaoCao: null,
        DiaChiDonViBaoCao: null,
      }
    }

    this.onChange = this.onChange.bind(this);
  }

  componentDidUpdate() {
    this.props.onData({
      ThongTinVeNguoiDonViGuiBaoCao: this.state.data
    });
  }

  onChange(value) {
    this.setState({
      data: {
        ...this.state.data,
        ...value
      }
    });
  }

  render() {
    return (
      <div className="row">
        <BoxText
          title={<p>Họ và Tên:</p>}
          name="HoVaTen"
          hint="Hint"
          onChange={this.onChange}
          size="4"
        />
        <BoxText
          title={<p>Email:</p>}
          name="Email"
          hint="Hint"
          onChange={this.onChange}
          size="4"
        />
        <BoxText
          title={<p>Điện thoại:</p>}
          name="DienThoai"
          hint="Hint"
          onChange={this.onChange}
          size="4"
        />
        <CheckboxText
          title={<p>Nghề nghiệp:</p>}
          name="NgheNghiep"
          options={['Bác sĩ', 'Nha sĩ', 'Dược sĩ', 'Công ty Dược phẩm', 'Y tá', 'Diều dưỡng', 'Nữ hộ sinh']}
          more='Khác'
          onChange={this.onChange}
          size="7"
        />
        <CheckboxText
          title={<p>Dạng báo cáo:</p>}
          name="DangBaoCao"
          options={['Báo cáo lần đầu', 'Báo cáo bổ sung']}
          onChange={this.onChange}
          size="5"
        />
        <BoxText
          title={<p>Ngày báo cáo:</p>}
          name="NgayBaoCao"
          hint="Hint"
          onChange={this.onChange}
          size="4"
        />
        <BoxText
          title={<p>Tên đơn vị báo cáo:</p>}
          name="TenDonViBaoCao"
          hint="Hint"
          onChange={this.onChange}
          size="4"
        />
        <BoxText
          title={<p>Địa chỉ đơn vị báo cáo:</p>}
          name="DiaChiDonViBaoCao"
          hint="Hint"
          onChange={this.onChange}
          size="4"
        />
      </div>
    );
  }
}

export default ComponentFour;