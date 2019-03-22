import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import Util from 'helpers/util.lib';


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
    re[this.props.name] = [];

    if (this.props.options && this.props.options.length >= 0) {
      for (let i = 0; i < this.checkboxRefs.length; i++) {
        if (this.checkboxRefs[i].checked) {
          re[this.props.name].push(this.checkboxRefs[i].value);
        }
      }
    }

    if (this.props.more && this.text.value && this.text.value !== "") {
      re[this.props.name].push(this.text.value)
    }

    return this.props.onChange(re);
  }

  select() {
    let options = this.props.options;
    if (!options || options.length <= 0) return null;

    if (this.props.data) var data = this.props.data[this.props.name];

    this.checkboxRefs = [];
    var re = [];
    for (let i = 0; i < options.length; i++) {
      var random = Math.floor(Math.random() * 1000000000);

      var element = null;
      if (this.props.viewOnly) {
        if (Util.isIn(options[i], data)) {
          element = <li key={i}>
            <input type="checkbox" id={"checkbox-options-" + random} value={options[i]} checked disabled />
            <label htmlFor={"checkbox-options-" + random}>{options[i]}</label>
          </li>
        }
        else {
          element = <li key={i}>
            <input type="checkbox" id={"checkbox-options-" + random} value={options[i]} disabled />
            <label htmlFor={"checkbox-options-" + random}>{options[i]}</label>
          </li>
        }
      } else {
        element = <li key={i}>
          <input type="checkbox" id={"checkbox-options-" + random} value={options[i]} onChange={this.onChange} ref={node => { if (node) this.checkboxRefs.push(node) }} />
          <label htmlFor={"checkbox-options-" + random}>{options[i]}</label>
        </li>
      }
      re.push(element)
    }

    return <ul className="my-checkbox">{re}</ul>;
  }

  more() {
    var more = this.props.more;
    if (!more) return null;

    if (this.props.data) var data = this.props.data[this.props.name];
    let options = this.props.options;

    if (this.props.viewOnly) {
      if (data) {
        for (let i = 0; i < data.length; i++) {
          if (!Util.isIn(data[i], options)) return <div className="col"><Textarea placeholder={more} value={data[i]} /></div>;
        }
      } else {
        return <div className="col"><Textarea placeholder={more} value={""} /></div>;
      }
    }
    return <div className="col"><Textarea placeholder={more} onChange={this.onChange} inputRef={node => { this.text = node }} /></div>;
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