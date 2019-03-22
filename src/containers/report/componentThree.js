import React, { Component } from 'react';

import CheckboxText from '../core/checkboxText';
import BoxText from '../core/boxText';

const NAME = 'PhanThamDinhADRCuaDonVi';


class ComponentThree extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        DanhGiaMoiLienQuanGiuaThuocVaADR: null,
        DonViThamDinhADRTheoThangNao: null,
        PhanBinhLuanCuaCanBoYTe: null,
      }
    }

    this.onChange = this.onChange.bind(this);
  }

  componentDidUpdate() {
    let data = {};
    data[NAME] = this.state.data;
    this.props.onData(data);
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
        <CheckboxText
          title={<p>11. Đánh giá mối liên quan giữa thuốc và ADR</p>}
          name="DanhGiaMoiLienQuanGiuaThuocVaADR"
          options={['Chắc chắn', 'Không chắc chắn', 'Có khả năng', 'Chưa phân loại', 'Có thể', 'Không thể phân loại', 'Chưa đánh giá']}
          more="Khác"
          onChange={this.onChange}
          size="6" />

        <CheckboxText
          title={<p>12. Đơn vị thẩm định ADR theo thang nào?</p>}
          name="DonViThamDinhADRTheoThangNao"
          options={['Thang WHO', 'Thang Naranjo', 'Chưa thẩm định']}
          more="Thang khác"
          onChange={this.onChange}
          size="6" />

        <BoxText
          title={<p>13. Phần bình luận của cán bộ y tế: <span className="italic">(Nếu có)</span></p>}
          name="PhanBinhLuanCuaCanBoYTe"
          hint="Hint"
          onChange={this.onChange}
          size="12"
        />
      </div>
    );
  }
}

export default ComponentThree;