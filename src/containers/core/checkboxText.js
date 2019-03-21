import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';


class CheckboxText extends Component {

  select(data) {
    if (!data || data.length <= 0) return null;

    var re = [];
    for (let i = 0; i < data.length; i++) {
      var random = Math.floor(Math.random() * 1000000000);
      re.push(<li key={i}>
        <input type="checkbox" id={"checkbox-options-" + random} value={data[i]} />
        <label htmlFor={"checkbox-options-" + random}>{data[i]}</label>
      </li>)
    }

    return <ul className="my-checkbox">{re}</ul>;
  }

  more(data) {
    if (!data || data.length <= 0) return null;

    var re = [];
    for (let i = 0; i < data.length; i++) {
      re.push(<div className="col" key={i}><Textarea placeholder={data[i]} /></div>)
    }

    return re;
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
          <div className="row">
            {this.more(this.props.more)}
          </div>
        </div>
      </div>
    );
  }
}

export default CheckboxText;