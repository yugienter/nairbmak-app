import React, { Component } from 'react';
import Modal from 'react-bootstrap4-modal';


class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      data: [
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 3, 4, 5, 6, 7]
      ]
    }

    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onOpen() {
    this.setState({ visible: true });
  }

  onClose() {
    this.setState({ visible: false });
  }

  header(data) {
    if (!data || data.length <= 0) return null;

    var re = [];
    for (var i = 0; i < data.length; i++) {
      re.push(<th key={i}>{data[i]}</th>);
    }
    re.push(<th key={i}>Xoá</th>);
    return (<tr>{re}</tr>)
  }

  data(data) {
    if (!data || data.length <= 0) return null;

    var re = [];
    for (var i = 0; i < data.length; i++) {
      if (!data[i] || data[i].length <= 0) continue;

      var row = [];
      for (var j = 0; j < data[i].length; j++) {
        row.push(<td key={`${i}.${j}`}>{data[i][j]}</td>);
      }
      row.push(<td key={`${i}.${j}`}><a href="#"><i className="fas fa-trash"></i></a></td>);
      re.push(<tr key={i}>{row}</tr>)
    }

    return re;
  }

  render() {
    return (
      <div className={"col-" + this.props.size}>
        <div className={"box"}>
          <div className="row">
            <div className="col">
              {this.props.title}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <table className="my-table">
                <tbody>
                  {this.header(this.props.headers)}
                  {this.data(this.state.data)}
                </tbody>
              </table>
            </div>
          </div>
          {this.props.btn}
        </div>
      </div>
    );
  }
}

export default Table;