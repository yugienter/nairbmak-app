import React, { Component } from 'react';

import BoxText from '../core/boxText';
import CheckboxText from '../core/checkboxText';


class InputTwo extends Component {
  render() {
    if (!this.props.visible) return null;
    return (
      <div className="col-12">
        <div className="row">
          <BoxText
            pop="box-secondary"
            title={<p>Tên thuốc dùng đông thời</p>}
            size='3'
          />
          <BoxText
            pop="box-secondary"
            title={<p>Dạng bào chế</p>}
            size='3'
          />
          <BoxText
            pop="box-secondary"
            title={<p>Nhà sản xuất thuốc</p>}
            size='3'
          />
          <BoxText
            pop="box-secondary"
            title={<p>Liều dùng một lần</p>}
            options={['G', 'mg', 'mcg', 'ng', 'UI', 'g/l', 'mg/ml', 'mcg/ml', 'UI/ml']}
            size='3'
          />
          <BoxText
            pop="box-secondary"
            title={<p>Đường dùng</p>}
            size='4'
          />
          <BoxText
            pop="box-secondary"
            title={<p>Ngày bắt đầu</p>}
            size='4'
          />
          <BoxText
            pop="box-secondary"
            title={<p>Ngày kết thúc</p>}
            size='4'
          />
          <BoxText
            pop="box-secondary"
            title={<p>Hàm lượng thuốc</p>}
            options={['G', 'mg', 'mcg', 'ng', 'UI', 'g/l', 'mg/ml', 'mcg/ml', 'UI/ml']}
            size='6'
          />
          <BoxText
            pop="box-secondary"
            title={<p>Số lô</p>}
            size='6'
          />
          <BoxText
            pop="box-secondary"
            title={<p>Số lần sử dụng</p>}
            options={['lần / ngày', 'lần / tuẩn', 'lần / tháng']}
            size='6'
          />
          <BoxText
            pop="box-secondary"
            title={<p>Lý do sử dụng thuốc</p>}
            size='6'
          />
        </div>
      </div>
    );
  }
}

export default InputTwo;