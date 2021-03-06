import React, { Component } from 'react';


class BoxOption extends Component {

  select(data) {
    if (!data || data.length <= 0) return null;

    var re = data.map((item, index) => {
      return <option value={item} key={index}>{item}</option>
    });

    return (<div className="col">
      <select name="option">
        {re}
      </select>
    </div>)
  }

  render() {
    return (
      <div className={"col-" + this.props.size}>
        <div className={this.props.pop ? this.props.pop : "box"}>
          <div className="row">
            <div className="col">
              {this.props.title}
            </div>
          </div>
          <div className="row">
            {this.select(this.props.options)}
          </div>
        </div>
      </div>
    );
  }
}

export default BoxOption;