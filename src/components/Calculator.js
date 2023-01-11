import React from 'react';

import '../App.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-container">
        <div className="calc-input-field">
          <input className="inputs" type="text" value="0" readOnly />
        </div>
        <ul className="rows">
          <li className="row">
            <button className="calc_btn" type="button">
              AC
            </button>
            <button className="calc_btn" type="button">
              +/-
            </button>
            <button className="calc_btn" type="button">
              %
            </button>
            <button className="calc_btn orange_btn" type="button">
              &divide;
            </button>
          </li>
          <li className="row">
            <button className="calc_btn" type="button">
              7
            </button>
            <button className="calc_btn" type="button">
              8
            </button>
            <button className="calc_btn" type="button">
              9
            </button>
            <button className="calc_btn orange_btn" type="button">
              &times;
            </button>
          </li>
          <li className="row">
            <button className="calc_btn" type="button">
              4
            </button>
            <button className="calc_btn" type="button">
              5
            </button>
            <button className="calc_btn" type="button">
              6
            </button>
            <button className="calc_btn orange_btn" type="button">
              &minus;
            </button>
          </li>
          <li className="row">
            <button className="calc_btn" type="button">
              1
            </button>
            <button className="calc_btn" type="button">
              2
            </button>
            <button className="calc_btn" type="button">
              3
            </button>
            <button className="calc_btn orange_btn" type="button">
              +
            </button>
          </li>
          <li className="row">
            <button className="calc_btn btn-zero" type="button">
              0
            </button>
            <button className="calc_btn" type="button">
              .
            </button>
            <button className="calc_btn orange_btn" type="button">
              =
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
