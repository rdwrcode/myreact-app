/* global Plotly */
import React from 'react';

class Plot extends React.Component {

  drawPlot = () => {
    Plotly.newPlot('plot', [{
      x: this.props.xData.toJS(),
      y: this.props.yData.toJS(),
      type: this.props.type
    }], {
      margin: {
        t: 0, r: 0, l: 30
      },
      xaxis: {
        gridcolor: 'transparent'
      }
    }, {
      displayModeBar: false
    });

    document.getElementById('plot').on('plotly_click', this.props.onPlotClick);
  }

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
    //return !this.props.equals(nextProps);
  }

  componentDidMount() {
    this.drawPlot();
  }

  componentDidUpdate() {
    this.drawPlot();
  }

  render() {
    console.log('RENDER PLOT');
    return (
      <div id="plot"></div>
    );
  }
}

export default Plot;
