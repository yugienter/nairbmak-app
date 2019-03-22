import React, { Component } from 'react';
import Table from '../core/table';

const NAME = 'ThongTinVeThuocNghiNgoGayADR';
const NAME_ONE = 'ThuocNghiNgoGayPhanUng';
const NAME_TWO = 'CacThuocDongThoi';


class ComponentTwo extends Component {

  render() {
    if (this.props.data) var data = this.props.data[NAME];
    if (data) var dataOne = data[NAME_ONE];
    if (data) var dataTwo = data[NAME_TWO];
    return (
      <div className="row">
        <Table
          viewOnly={true}
          title={<p>9. Thuốc nghi ngờ gây phản ứng</p>}
          size='12'
          headers={['Thuốc nghi ngờ', 'Dạng bào chế', 'Hàm lượng', 'Liều dùng', 'Đường dùng', 'Ngày bắt đầu', 'Ngày kết thúc', 'Lý do dùng thuốc']}
          keys={['ThuocNghiNgo', 'DangBaoChe', 'HamLuongThuoc', 'LieuDungMotLan', 'DuongDung', 'NgayBatDau', 'NgayKetThuc', 'LyDoDungThuoc']}
          data={dataOne}
        />

        <Table
          viewOnly={true}
          title={<p>10. Các thuốc dùng đồng thời (Ngoại trừ các thuốc dùng điều trị/ khắc phục hậu quả của ADR)</p>}
          size='12'
          headers={['Thuốc dùng đồng thời', 'Dạng bào chế', 'Hàm lượng', 'Liều dùng', 'Đường dùng', 'Ngày bắt đầu', 'Ngày kết thúc', 'Lý do dùng thuốc']}
          keys={['ThuocDungDongThoi', 'DangBaoChe', 'HamLuongThuoc', 'LieuDungMotLan', 'DuongDung', 'NgayBatDau', 'NgayKetThuc', 'LyDoDungThuoc']}
          data={dataTwo}
        />
      </div>
    );
  }
}

export default ComponentTwo;