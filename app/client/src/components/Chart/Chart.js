import React, { Component } from 'react';
import { pie } from 'react-chartjs-2';

class Chart extends Component {
  render() {
    return (
      <div className="chart">
        <pie />
      </div>
    );
  }
}

export default Chart;
