import React, { useState } from 'react';
import calculate from './logic/calculate';

import '../App.css';

const Calculator = () => {
  const [CalcState, setCalcState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickEvent = (e) => {
    const result = calculate(CalcState, e.target.textContent);
    setCalcState((prev) => ({
      ...prev,
      ...result,
    }));
  };

  const { total, next } = CalcState;
  return (
    <div className="calc-container">
      <div className="calc-input-field">
        <input className="inputs" type="text" value={next || total || 0} readOnly />
      </div>
      <ul className="rows">
        <li className="row">
          <button className="calc_btn" onClick={clickEvent} type="button">
            AC
          </button>
          <button className="calc_btn" onClick={clickEvent} type="button">
            +/-
          </button>
          <button className="calc_btn" onClick={clickEvent} type="button">
            %
          </button>
          <button className="calc_btn orange_btn" type="button" onClick={clickEvent}>
            &#247;
          </button>
        </li>
        <li className="row">
          <button className="calc_btn" onClick={clickEvent} type="button">
            7
          </button>
          <button className="calc_btn" onClick={clickEvent} type="button">
            8
          </button>
          <button className="calc_btn" onClick={clickEvent} type="button">
            9
          </button>
          <button className="calc_btn orange_btn" type="button" onClick={clickEvent}>
            x
          </button>
        </li>
        <li className="row">
          <button className="calc_btn" onClick={clickEvent} type="button">
            4
          </button>
          <button className="calc_btn" onClick={clickEvent} type="button">
            5
          </button>
          <button className="calc_btn" onClick={clickEvent} type="button">
            6
          </button>
          <button className="calc_btn orange_btn" type="button" onClick={clickEvent}>
            -
          </button>
        </li>
        <li className="row">
          <button className="calc_btn" onClick={clickEvent} type="button">
            1
          </button>
          <button className="calc_btn" onClick={clickEvent} type="button">
            2
          </button>
          <button className="calc_btn" onClick={clickEvent} type="button">
            3
          </button>
          <button className="calc_btn orange_btn" type="button" onClick={clickEvent}>
            +
          </button>
        </li>
        <li className="row">
          <button className="calc_btn btn-zero" onClick={clickEvent} type="button">
            0
          </button>
          <button className="calc_btn" onClick={clickEvent} type="button">
            .
          </button>
          <button className="calc_btn orange_btn" onClick={clickEvent} type="button">
            =
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Calculator;
