import React from 'react';
import Digits from './Digits';
import Result from './Result';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-outer-box">
        <div className="calc-box">
          <Result />
          <Digits />
        </div>
      </div>
    );
  }
}

export default Calculator;
