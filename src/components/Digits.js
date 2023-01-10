import React from 'react';

class Digits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="digits-box">
        <div className="digits-input">AC</div>
        <div className="digits-input">+/-</div>
        <div className="digits-input">%</div>
        <div className="digits-input operators">&divide;</div>
        <div className="digits-input">7</div>
        <div className="digits-input">8</div>
        <div className="digits-input">9</div>
        <div className="digits-input operators">x</div>
        <div className="digits-input">4</div>
        <div className="digits-input">5</div>
        <div className="digits-input">6</div>
        <div className="digits-input operators">-</div>
        <div className="digits-input">1</div>
        <div className="digits-input">2</div>
        <div className="digits-input">3</div>
        <div className="digits-input operators">+</div>
        <div className="digits-input double-space">0</div>
        <div className="digits-input">.</div>
        <div className="digits-input operators">=</div>
      </div>
    );
  }
}

export default Digits;
