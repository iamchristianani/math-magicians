import React from 'react';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(button) {
    this.setState((state) => calculate(state, button.target.name));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calc-outer-box">
        <div className="calc-box">
          <div className="result-box">
            <span className="result">
              {total}
              {operation}
              {next}
            </span>
          </div>
          <div className="digits-box">
            <button name="AC" type="button" className="digits-input" onClick={this.buttonClick}>AC</button>
            <button name="+/-" type="button" className="digits-input" onClick={this.buttonClick}>+/-</button>
            <button name="%" type="button" className="digits-input" onClick={this.buttonClick}>%</button>
            <button name="÷" type="button" className="digits-input operators" onClick={this.buttonClick}>&divide;</button>
            <button name="7" type="button" className="digits-input" onClick={this.buttonClick}>7</button>
            <button name="8" type="button" className="digits-input" onClick={this.buttonClick}>8</button>
            <button name="9" type="button" className="digits-input" onClick={this.buttonClick}>9</button>
            <button name="x" type="button" className="digits-input operators" onClick={this.buttonClick}>x</button>
            <button name="4" type="button" className="digits-input" onClick={this.buttonClick}>4</button>
            <button name="5" type="button" className="digits-input" onClick={this.buttonClick}>5</button>
            <button name="6" type="button" className="digits-input" onClick={this.buttonClick}>6</button>
            <button name="-" type="button" className="digits-input operators" onClick={this.buttonClick}>-</button>
            <button name="1" type="button" className="digits-input" onClick={this.buttonClick}>1</button>
            <button name="2" type="button" className="digits-input" onClick={this.buttonClick}>2</button>
            <button name="3" type="button" className="digits-input" onClick={this.buttonClick}>3</button>
            <button name="+" type="button" className="digits-input operators" onClick={this.buttonClick}>+</button>
            <button name="0" type="button" className="digits-input double-space" onClick={this.buttonClick}>0</button>
            <button name="." type="button" className="digits-input" onClick={this.buttonClick}>.</button>
            <button name="=" type="button" className="digits-input operators" onClick={this.buttonClick}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
