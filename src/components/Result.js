import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="result-box">
        <span className="result">0</span>
      </div>

    );
  }
}

export default Result;
