import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increase } from '../../modules/counter.reducer';


class Explorer extends Component {

  componentDidMount() {
    this.props.increase();

  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">

          <div className="row">
            <div className="pseudo-box">
              <div className="row">
                <div className="col-2"><h1>Block</h1></div>
                <div className="col-4"><h1>Transaction</h1></div>
                <div className="col-3"><h1>Submitter</h1></div>
                <div className="col-3"><h1>Document Hash</h1></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="box">
              <div className="row">
                <div className="col-2">
                  <a href="#">7404659</a>
                </div>
                <div className="col-4">
                  <a href="#" className="lengthy">0x6f6a14f98bdffb8f51c246815364dcf189c0a4d2415a5bd7db2e2eea0f18c68b</a>
                </div>
                <div className="col-3">
                  <a href="#" className="lengthy">0x02fe82f4e23e670db6fe97e657c885d54f0ce0b9</a>
                </div>
                <div className="col-3">
                  <a href="#" className="lengthy">QmRs6uTXuUUV7PZN9KQ8XXQLXiVoWv3mZyGzxJwhNZ9spA</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="box">
              <div className="row">
                <div className="col-2">
                  <a href="#">7404659</a>
                </div>
                <div className="col-4">
                  <a href="#" className="lengthy">0x6f6a14f98bdffb8f51c246815364dcf189c0a4d2415a5bd7db2e2eea0f18c68b</a>
                </div>
                <div className="col-3">
                  <a href="#" className="lengthy">0x02fe82f4e23e670db6fe97e657c885d54f0ce0b9</a>
                </div>
                <div className="col-3">
                  <a href="#" className="lengthy">QmRs6uTXuUUV7PZN9KQ8XXQLXiVoWv3mZyGzxJwhNZ9spA</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="box">
              <div className="row">
                <div className="col-2">
                  <a href="#">7404659</a>
                </div>
                <div className="col-4">
                  <a href="#" className="lengthy">0x6f6a14f98bdffb8f51c246815364dcf189c0a4d2415a5bd7db2e2eea0f18c68b</a>
                </div>
                <div className="col-3">
                  <a href="#" className="lengthy">0x02fe82f4e23e670db6fe97e657c885d54f0ce0b9</a>
                </div>
                <div className="col-3">
                  <a href="#" className="lengthy">QmRs6uTXuUUV7PZN9KQ8XXQLXiVoWv3mZyGzxJwhNZ9spA</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="box">
              <div className="row">
                <div className="col-2">
                  <a href="#">7404659</a>
                </div>
                <div className="col-4">
                  <a href="#" className="lengthy">0x6f6a14f98bdffb8f51c246815364dcf189c0a4d2415a5bd7db2e2eea0f18c68b</a>
                </div>
                <div className="col-3">
                  <a href="#" className="lengthy">0x02fe82f4e23e670db6fe97e657c885d54f0ce0b9</a>
                </div>
                <div className="col-3">
                  <a href="#" className="lengthy">QmRs6uTXuUUV7PZN9KQ8XXQLXiVoWv3mZyGzxJwhNZ9spA</a>
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
  counter: state.counter
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increase: () => increase(1)
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explorer);