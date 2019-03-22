import React, { Component } from 'react';

import CheckboxText from '../core/checkboxText';
import BoxText from '../core/boxText';

const NAME = 'PhanThamDinhADRCuaDonVi';


class ComponentThree extends Component {

  render() {
    if (this.props.data) var data = this.props.data[NAME];
    return (
      <div className="row">
        <CheckboxText
          viewOnly={true}
          title={<p>11. Đánh giá mối liên quan giữa thuốc và ADR</p>}
          name="DanhGiaMoiLienQuanGiuaThuocVaADR"
          options={['Chắc chắn', 'Không chắc chắn', 'Có khả năng', 'Chưa phân loại', 'Có thể', 'Không thể phân loại', 'Chưa đánh giá']}
          more="Khác"
          data={data}
          size="6" />

        <CheckboxText
          viewOnly={true}
          title={<p>12. Đơn vị thẩm định ADR theo thang nào?</p>}
          name="DonViThamDinhADRTheoThangNao"
          options={['Thang WHO', 'Thang Naranjo', 'Chưa thẩm định']}
          more="Thang khác"
          data={data}
          size="6" />

        <BoxText
          viewOnly={true}
          title={<p>13. Phần bình luận của cán bộ y tế: <span className="italic">(Nếu có)</span></p>}
          name="PhanBinhLuanCuaCanBoYTe"
          hint="Hint"
          data={data}
          size="12"
        />
      </div>
    );
  }
}

export default ComponentThree;