import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';


class BoxText extends Component {
  constructor() {
    super();

    this.select = this.select.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    var re = {};
    re[this.props.name] = {};
    re[this.props.name] = this.text.value;
    if (this.option) re[this.props.name] = re[this.props.name] + ' ' + this.option.value;
    this.props.onChange(re);
  }

  select() {
    let data = this.props.options;
    if (!data || data.length <= 0) return null;

    var re = [];
    for (let i = 0; i < data.length; i++) {
      re.push(<option value={data[i]} key={i}>{data[i]}</option>)
    }

    return (
      <div className="col">
        <select onChange={this.onChange} name="option" ref={node => { this.option = node }} >
          {re}
        </select>
      </div>
    )
  }

  render() {
    if (this.props.data) var data = this.props.data[this.props.name];

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
              {
                data ? <Textarea value={data} /> :
                  <Textarea onChange={this.onChange} placeholder={this.props.hint} inputRef={node => { this.text = node }} />
              }
            </div>
            {this.select()}
          </div>
        </div>
      </div>
    );
  }
}

export default BoxText;