import React, { Component } from 'react';

import CheckboxText from '../core/checkboxText';
import BoxText from '../core/boxText';


class ComponentThree extends Component {

  render() {
    return (
      <div className="row">
        <CheckboxText
          title={<p>13. Đánh giá mối liên quan giữa thuốc và ADR</p>}
          options={['Chắc chắn', 'Không chắc chắn', 'Có khả năng', 'Chưa phân loại', 'Có thể', 'Không thể phân loại', 'Chưa đánh giá']}
          more={['Khác']}
          size="6" />

        <CheckboxText
          title={<p>14. Đơn vị thẩm định ADR theo thang nào?</p>}
          options={['Thang WHO', 'Thang Naranjo', 'Chưa thẩm định']}
          more={['Thang khác']}
          size="6" />

        <BoxText
          title={<p>15. Phần bình luận của cán bộ y tế: <span className="italic">(Nếu có)</span></p>}
          size="12"
        />
      </div>
    );
  }
}

export default ComponentThree;