import React, { Component } from 'react';


class Table extends Component {
  constructor(props) {
    super(props);

    this.header = this.header.bind(this);
    this.data = this.data.bind(this);
  }

  header() {
    let data = this.props.headers;
    if (!data || data.length <= 0) return null;

    var re = [];
    for (var i = 0; i < data.length; i++) {
      re.push(<th key={i}>{data[i]}</th>);
    }
    if (!this.props.viewOnly) {
      re.push(<th key={i}>Xoá</th>);
    }
    return (<tr>{re}</tr>)
  }

  data() {
    let data = this.props.data;
    let keys = this.props.keys;
    if (!data || data.length <= 0) return null;
    if (!keys || keys.length <= 0) return null;

    let re = [];
    for (let i = 0; i < data.length; i++) {
      if (!data[i] || data[i].length <= 0) continue;

      let row = [];
      for (let j = 0; j < keys.length; j++) {
        row.push(
          <td key={`${i}.${keys[j]}`}>
            {data[i][keys[j]]}
          </td>);
      }
      if (!this.props.viewOnly) {
        row.push(
          <td key={`${i}.trash`}>
            <a onClick={() => { this.props.remove(i) }}>
              <i className="fas fa-trash"></i>
            </a>
          </td>
        );
      }
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
                  {this.header()}
                  {this.data()}
                </tbody>
              </table>
            </div>
          </div>
          {!this.props.viewOnly ? this.props.btn : null}
        </div>
      </div>
    );
  }
}

export default Table;