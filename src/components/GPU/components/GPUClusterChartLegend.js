import React from 'react';

class GPUClusterChartLegend extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.lineTypes !== prevProps.lineTypes) {
      Object.keys(this.props.lineTypes).forEach((cluster, index) => {
        const script = document.createElement('script');
        script.innerHTML = `
                                if (typeof variable !== 'undefined') {
                                    let canvas = document.getElementById('canvas-${cluster}');
                                    let ctx = canvas.getContext('2d');
                                }
                                canvas = document.getElementById('canvas-${cluster}');
                                ctx = canvas.getContext('2d');
                                ctx.beginPath();
                                ctx.setLineDash([${this.props.lineTypes[cluster]}]);
                                ctx.moveTo(0, 30);
                                ctx.lineTo(200, 30);
                                ctx.stroke();`;
        script.async = true;
        console.log(script.innerHTML);
        document.body.appendChild(script);
      });
    }
  }

  render() {
    return (
      <div
        id="cluster-chart-legend"
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}>
        {Object.keys(this.props.lineTypes).map((cluster) => {
          return (
            <div
              key={cluster}
              className="cluster-chart-legend-element"
              style={{ display: 'flex' }}>
              <canvas
                id={`canvas-${cluster}`}
                style={{ width: '50px', height: '50px' }}></canvas>
              <p>{cluster}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GPUClusterChartLegend;
