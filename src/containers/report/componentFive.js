import React, { Component } from 'react';
import CheckboxText from '../core/checkboxText';
import BoxText from '../core/boxText';

const NAME = 'ThongTinVeNguoiDonViDanhGia';


class ComponentFive extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        DanhSachChuyenGiaDanhGia: null
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
        <BoxText
          title={<p>Danh sách chuyên gia đánh giá:</p>}
          name="DanhSachChuyenGiaDanhGia"
          hint="0xa, 0xb, ..."
          onChange={this.onChange}
          size="12"
        />
      </div>
    );
  }
}

export default ComponentFive;