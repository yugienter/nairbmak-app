import React, { Component } from 'react';

import BoxText from '../core/boxText';
import CheckboxText from '../core/checkboxText';


class ComponentOne extends Component {

  render() {
    return (
      <div className="row">
        <BoxText
          title={<p>1. Ngày xuất hiện phản ứng:</p>}
          hint="Hint"
          size="6" />
        <BoxText
          title={<p>2. Phản ứng xuất hiện sau bao lâu: <span className="italic">(Tính từ lần dùng cuối cùng của thuốc nghi ngờ)</span></p>}
          hint="Hint"
          options={['giờ', 'phút', 'giây']}
          size="6" />
        <BoxText
          title={<p>3. Mô tả biểu hiện ADR</p>}
          hint="Hint"
          size="6" />
        <BoxText
          title={<p>4. Các xét nghiệm liên quan đến phản ứng</p>}
          hint="Hint"
          size="6" />
        <BoxText
          title={<p>5. Tiền sử:</p>}
          hint="Hint"
          size="6" />
        <BoxText
          title={<p>6. Cách xử trí phản ứng</p>}
          hint="Hint"
          size="6" />
        <CheckboxText
          title={<p>7. Mức độ nghiêm trọng của phản ứng:</p>}
          options={['Tử vong', 'Nhập viện/Kéo dài thời gian nằm viện', 'Dị tật thai nhi', 'Đe dọa tính mạng', 'Tàn tật vĩnh viễn/nặng nề', 'Không nghiêm trọng', 'Không rõ']}
          size="12" />
        <CheckboxText
          title={<p>8. Kết quả sau khi xử trí phản ứng:</p>}
          options={['Tử vong do ADR', 'Chưa hồi phục', 'Hồi phục có di chứng', 'Tử vong không liên quan đến thuốc', 'Đang hồi phục', 'Hồi phục không có di chứng', 'Không rõ']}
          size="12" />
      </div>
    );
  }
}

export default ComponentOne;