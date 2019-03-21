import React, { Component } from 'react';

import Table from '../core/table'


class ComponentTwo extends Component {

  render() {
    return (
      <div className="row">
        <Table
          viewOnly={true}
          title={<p>9. Thuốc nghi ngờ gây phản ứng</p>}
          size='12'
          headers={['Thuốc nghi ngờ', 'Dạng bào chế', 'Hàm lượng', 'Liều dùng', 'Đường dùng', 'Ngày bắt đầu', 'Ngày kết thúc', 'Lý do dùng thuốc']}
          keys={['ThuocNghiNgo', 'DangBaoChe', 'HamLuongThuoc', 'LieuDungMotLan', 'DuongDung', 'NgayBatDau', 'NgayKetThuc', 'LyDoDungThuoc']}
        />

        <Table
          viewOnly={true}
          title={<p>10. Các thuốc dùng đồng thời (Ngoại trừ các thuốc dùng điều trị/ khắc phục hậu quả của ADR)</p>}
          size='12'
          headers={['Thuốc dùng đồng thời', 'Dạng bào chế', 'Hàm lượng', 'Liều dùng', 'Đường dùng', 'Ngày bắt đầu', 'Ngày kết thúc', 'Lý do dùng thuốc']}
          keys={['ThuocDungDongThoi', 'DangBaoChe', 'HamLuongThuoc', 'LieuDungMotLan', 'DuongDung', 'NgayBatDau', 'NgayKetThuc', 'LyDoDungThuoc']}
        />
      </div>
    );
  }
}

export default ComponentTwo;