import React, { Component } from 'react';
import CheckboxText from '../core/checkboxText';
import BoxText from '../core/boxText';


class ComponentFour extends Component {

  render() {
    return (
      <div className="row">
        <BoxText
          title={<p>Họ và Tên:</p>}
          size="4" />
        <BoxText
          title={<p>Email:</p>}
          size="4" />
          <BoxText
            title={<p>Điện thoại:</p>}
            size="4" />
        <CheckboxText
          title={<p>Nghề nghiệp:</p>}
          options={['Bác sĩ', 'Nha sĩ', 'Dược sĩ', 'Công ty Dược phẩm', 'Y tá', 'Diều dưỡng', 'Nữ hộ sinh']}
          more={['Khác']}
          size="6" />
        <CheckboxText
          title={<p>Dạng báo cáo:</p>}
          options={['Báo cáo lần đầu', 'Báo cáo bổ sung']}
          size="6" />
        <BoxText
          title={<p>Ngày báo cáo:</p>}
          size="4" />
        <BoxText
          title={<p>Tên đơn vị báo cáo:</p>}
          size="4" />
        <BoxText
          title={<p>Địa chỉ đơn vị báo cáo:</p>}
          size="4" />
      </div>
    );
  }
}

export default ComponentFour;