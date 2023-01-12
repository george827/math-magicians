import React from 'react';
import calculate from './logic/calculate';

import '../App.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  clickEvent = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState((prev) => ({
      ...prev,
      ...result,
    }));
  };

  render() {
    const { total, next } = this.state;
    return (
      <div className="calc-container">
        <div className="calc-input-field">
          <input className="inputs" type="text" value={next || total || 0} readOnly />
        </div>
        <ul className="rows">
          <li className="row">
            <button className="calc_btn" onClick={this.clickEvent} type="button">
              AC
            </button>
            <button className="calc_btn" onClick={this.clickEvent} type="button">
              +/-
            </button>
            <button className="calc_btn" onClick={this.clickEvent} type="button">
              %
            </button>
            <button className="calc_btn orange_btn" type="button" onClick={this.clickEvent}>
              &#247;
            </button>
          </li>
          <li className="row">
            <button className="calc_btn" onClick={this.clickEvent} type="button">
              7
            </button>
            <button className="calc_btn" onClick={this.clickEvent} type="button">
              8
            </button>
            <button className="calc_btn" onClick={this.clickEvent} type="button">
              9
            </button>
            <button className="calc_btn orange_btn" type="button" onClick={this.clickEvent}>
              x
            </button>
          </li>
          <li className="row">
            <button className="calc_btn" onClick={this.clickEvent} type="button">
              4
            </button>
            <button className="calc_btn" onClick={this.clickEvent} type="button">
              5
            </button>
            <button className="calc_btn" onClick={this.clickEvent} type="button">
              6
            </button>
            <button className="calc_btn orange_btn" type="button" onClick={this.clickEvent}>
              -
            </button>
          </li>
          <li className="row">
            <button className="calc_btn" onClick={this.clickEvent} type="button">
              1
            </button>
            <button className="calc_btn" onClick={this.clickEvent} type="button">
              2
            </button>
            <button className="calc_btn" onClick={this.clickEvent} type="button">
              3
            </button>
            <button className="calc_btn orange_btn" type="button" onClick={this.clickEvent}>
              +
            </button>
          </li>
          <li className="row">
            <button className="calc_btn btn-zero" onClick={this.clickEvent} type="button">
              0
            </button>
            <button className="calc_btn" onClick={this.clickEvent} type="button">
              .
            </button>
            <button className="calc_btn orange_btn" onClick={this.clickEvent} type="button">
              =
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
