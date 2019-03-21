import React, { Component } from 'react';

import Table from '../core/table'


class ComponentTwo extends Component {

  render() {
    return (
      <div className="row">
        <Table
          title={<p>9. Thuốc nghi ngờ gây phản ứng</p>}
          size='12'
          headers={['Thuốc nghi ngờ', 'Dạng bào chế/hàm lượng', 'Liều dùng', 'Đường dùng', 'Ngày bắt đầu', 'Ngày kết thúc', 'Lý do dùng thuốc']}
        />

        <Table
          title={<p>12. Các thuốc dùng đồng thời (Ngoại trừ các thuốc dùng điều trị/ khắc phục hậu quả của ADR)</p>}
          size='12'
          headers={['Thuốc đồng thời', 'Dạng bào chế/hàm lượng', 'Liều dùng', 'Đường dùng', 'Ngày bắt đầu', 'Ngày kết thúc', 'Lý do dùng thuốc']}
        />
      </div>
    );
  }
}

export default ComponentTwo;