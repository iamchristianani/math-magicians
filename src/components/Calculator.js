import React, { useState } from 'react';
import calculate from './logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    operation: null,
    next: null,
  });

  const buttonClick = (button) => {
    setState((state) => calculate(state, button.target.name));
  };

  const { total, next, operation } = state;

  return (
    <div className="calc-outer-box">
      <div className="calc-text">
        <h2>Let us Do Some Maths</h2>
      </div>
      <div className="calc-box">
        <div className="result-box">
          <span className="result">
            {total}
            {operation}
            {next}
          </span>
        </div>
        <div className="digits-box">
          <button name="AC" type="button" className="digits-input" onClick={buttonClick}>AC</button>
          <button name="+/-" type="button" className="digits-input" onClick={buttonClick}>+/-</button>
          <button name="%" type="button" className="digits-input" onClick={buttonClick}>%</button>
          <button name="÷" type="button" className="digits-input operators" onClick={buttonClick}>&divide;</button>
          <button name="7" type="button" className="digits-input" onClick={buttonClick}>7</button>
          <button name="8" type="button" className="digits-input" onClick={buttonClick}>8</button>
          <button name="9" type="button" className="digits-input" onClick={buttonClick}>9</button>
          <button name="x" type="button" className="digits-input operators" onClick={buttonClick}>x</button>
          <button name="4" type="button" className="digits-input" onClick={buttonClick}>4</button>
          <button name="5" type="button" className="digits-input" onClick={buttonClick}>5</button>
          <button name="6" type="button" className="digits-input" onClick={buttonClick}>6</button>
          <button name="-" type="button" className="digits-input operators" onClick={buttonClick}>-</button>
          <button name="1" type="button" className="digits-input" onClick={buttonClick}>1</button>
          <button name="2" type="button" className="digits-input" onClick={buttonClick}>2</button>
          <button name="3" type="button" className="digits-input" onClick={buttonClick}>3</button>
          <button name="+" type="button" className="digits-input operators" onClick={buttonClick}>+</button>
          <button name="0" type="button" className="digits-input double-space" onClick={buttonClick}>0</button>
          <button name="." type="button" className="digits-input" onClick={buttonClick}>.</button>
          <button name="=" type="button" className="digits-input operators" onClick={buttonClick}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
