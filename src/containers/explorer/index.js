import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import eachSeries from 'async/eachSeries';
import Util from 'helpers/util.lib';
import { getExplorer, getReport } from 'modules/database.reducer';


class Explorer extends Component {

  constructor() {
    super();

    this.state = {
      page: 0,
      limit: 10,
      data: []
    }

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this._getExplorer = this._getExplorer.bind(this);
  }

  previous() {
    if (this.state.page == 0) return;
    this.setState({ page: this.state.page - 1 }, () => {
      this._getExplorer();
    });
  }

  next() {
    if (!this.state.data || this.state.data.length == 0) return;
    this.setState({ page: this.state.page + 1 }, () => {
      this._getExplorer();
    });
  }

  _getExplorer() {
    let from = this.state.page * this.state.limit + 1;
    let to = from + this.state.limit;
    let indices = []
    for (let i = from; i < to; i++) {
      indices.push(i);
    }

    let data = [];
    eachSeries(indices, (index, callback) => {
      this.props.getExplorer(index).then(hash => {
        if (hash && hash !== '0x') {
          this.props.getReport(hash).then(report => {
            report.push(hash);
            data.push(report);
          }).catch(er => {
            console.error(er);
          });
        }
        return callback();
      }).catch(er => {
        return callback(er);
      });
    }, (er) => {
      if (er) data = [];
      return this.setState({ data: data });
    });
  }

  show(data) {
    let re = [];

    for (let i = 0; i < data.length; i++) {
      let element = <div key={i} className="row">
        <div className="box">
          <div className="row">
            <div className="col-1">
              <a href={Util.linkBlockEtherscan(this.props.work.NETWORK, Number(data[i][0]))} target="_blank">{Number(data[i][0])}</a>
            </div>
            <div className="col-2">
              <p className="lengthy">{Date(Number(data[i][1]) * 1000)}</p>
            </div>
            <div className="col-3">
              <a href={Util.linkAddressEtherscan(this.props.work.NETWORK, data[i][3])} target="_blank" className="lengthy">{data[i][3]}</a>
            </div>
            <div className="col-3">
              <a href="#" className="lengthy">{data[i][5]}</a>
            </div>
            <div className="col-2">
              <p className="lengthy">{Number(data[i][2]) / 10 ** 18}</p>
            </div>
            <div className="col-1">
              <p>{data[i][4].toString()}</p>
            </div>
          </div>
        </div>
      </div>

      re.push(element);
    }

    return re;
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">

          <div className="row">
            <div className="pseudo-box">
              <div className="row">
                <div className="col-1"><h1>Block</h1></div>
                <div className="col-2"><h1>Timestamp</h1></div>
                <div className="col-3"><h1>Submitter</h1></div>
                <div className="col-3"><h1>Document Hash</h1></div>
                <div className="col-2"><h1>Weight</h1></div>
                <div className="col-1"><h1>Closed</h1></div>
              </div>
            </div>
          </div>

          {this.show(this.state.data)}

          <div className="row">
            <div className="box">
              <div className="row">
                <div className="col-3">
                  <button className="my-btn secondary no-margin" onClick={this._getExplorer}>Tải dữ liệu</button>
                </div>
                <div className="col-4">
                  <button className="my-btn primary no-margin" onClick={this.previous}>Previous</button>
                </div>
                <div className="col-1">
                  <p className="text-center">Page: {this.state.page + 1}</p>
                </div>
                <div className="col-4">
                  <button className="my-btn primary no-margin" onClick={this.next}>Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  routing: state.routing,
  work: state.work,
  database: state.database,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getExplorer: (index) => getExplorer(index),
  getReport: (hash) => getReport(hash),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explorer);