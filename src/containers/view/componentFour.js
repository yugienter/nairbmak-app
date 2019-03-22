import React, { Component } from 'react';
import CheckboxText from '../core/checkboxText';
import BoxText from '../core/boxText';

const NAME = 'ThongTinVeNguoiDonViGuiBaoCao';


class ComponentFour extends Component {

  render() {
    if (this.props.data) var data = this.props.data[NAME];
    return (
      <div className="row">
        <BoxText
          viewOnly={true}
          title={<p>Họ và Tên:</p>}
          name="HoVaTen"
          hint="Hint"
          data={data}
          size="4"
        />
        <BoxText
          viewOnly={true}
          title={<p>Email:</p>}
          name="Email"
          hint="Hint"
          data={data}
          size="4"
        />
        <BoxText
          viewOnly={true}
          title={<p>Điện thoại:</p>}
          name="DienThoai"
          hint="Hint"
          data={data}
          size="4"
        />
        <CheckboxText
          viewOnly={true}
          title={<p>Nghề nghiệp:</p>}
          name="NgheNghiep"
          options={['Bác sĩ', 'Nha sĩ', 'Dược sĩ', 'Công ty Dược phẩm', 'Y tá', 'Diều dưỡng', 'Nữ hộ sinh']}
          more='Khác'
          data={data}
          size="7"
        />
        <CheckboxText
          viewOnly={true}
          title={<p>Dạng báo cáo:</p>}
          name="DangBaoCao"
          options={['Báo cáo lần đầu', 'Báo cáo bổ sung']}
          data={data}
          size="5"
        />
        <BoxText
          viewOnly={true}
          title={<p>Ngày báo cáo:</p>}
          name="NgayBaoCao"
          hint="Hint"
          data={data}
          size="4"
        />
        <BoxText
          viewOnly={true}
          title={<p>Tên đơn vị báo cáo:</p>}
          name="TenDonViBaoCao"
          hint="Hint"
          data={data}
          size="4"
        />
        <BoxText
          viewOnly={true}
          title={<p>Địa chỉ đơn vị báo cáo:</p>}
          name="DiaChiDonViBaoCao"
          hint="Hint"
          data={data}
          size="4"
        />
      </div>
    );
  }
}

export default ComponentFour;