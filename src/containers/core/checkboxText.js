import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';


class CheckboxText extends Component {
  constructor() {
    super();

    this.select = this.select.bind(this);
    this.more = this.more.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    var re = {};
    re[this.props.name] = {};
    re[this.props.name].data = [];

    if (this.props.options && this.props.options.length >= 0) {
      for (let i = 0; i < this.checkboxRefs.length; i++) {
        if (this.checkboxRefs[i].checked) {
          re[this.props.name].data.push(this.checkboxRefs[i].value);
        }
      }
    }

    if (this.props.more && this.text.value && this.text.value !== "") {
      re[this.props.name].data.push(this.text.value)
    }

    return this.props.onChange(re);
  }

  select() {
    let data = this.props.options;
    if (!data || data.length <= 0) return null;

    this.checkboxRefs = [];
    var re = [];
    for (let i = 0; i < data.length; i++) {
      var random = Math.floor(Math.random() * 1000000000);
      re.push(<li key={i}>
        <input type="checkbox" id={"checkbox-options-" + random} value={data[i]} onChange={this.onChange} ref={node => { if (node) this.checkboxRefs.push(node) }} />
        <label htmlFor={"checkbox-options-" + random}>{data[i]}</label>
      </li>)
    }

    return <ul className="my-checkbox">{re}</ul>;
  }

  more() {
    var data = this.props.more;
    if (!data) return null;

    return <div className="col"><Textarea placeholder={data} onChange={this.onChange} inputRef={node => { this.text = node }} /></div>;
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
            {this.select()}
          </div>
          <div className="row">
            {this.more()}
          </div>
        </div>
      </div>
    );
  }
}

export default CheckboxText;