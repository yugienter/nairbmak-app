import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';


class BoxText extends Component {
  
  select(data) {
    if (!data || data.length <= 0) return null;

    var re = [];
    for (let i = 0; i < data.length; i++) {
      re.push(<option value={data[i]} key={i}>{data[i]}</option>)
    }

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
            <div className="col">
              <Textarea placeholder={this.props.hint} />
            </div>
            {this.select(this.props.options)}
          </div>
        </div>
      </div>
    );
  }
}

export default BoxText;