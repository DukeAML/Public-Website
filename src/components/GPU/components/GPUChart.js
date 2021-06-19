import './GPUChart.css';
import React from 'react';
import { Segment, Dimmer, Loader, Button } from 'semantic-ui-react';
import { Line } from 'react-chartjs-2';
import StatisticsPool from './../model/StatisticPool';
import GPUStatisticChartLegend from './GPUStatisticChartLegend';
import GPUClusterChartLegend from './GPUClusterChartLegend';
import Statistic from '../model/Statistic';

class GPUChart extends React.Component {
  state = { lineTypes: {}, chartData: {}, isLoaded: false };

  componentDidMount() {
    this.setState({ lineTypes: {}, chartData: {} });
    this.fetchStatisticPool();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.selectedClusters !== prevProps.selectedClusters) {
      this.setState({ lineTypes: {}, chartData: {}, isLoaded: false });
      this.fetchStatisticPool();
    }
  }

  async fetchStatisticPool() {
    const statisticsPool = await StatisticsPool.fetchStatisticPool(
      this.props.statistics,
      this.props.selectedClusters,
    );
    this.setState({
      lineTypes: statisticsPool.generateLineTypes(),
      chartData: statisticsPool.convertToChartData(),
      isLoaded: true,
    });
  }

  render() {
    return (
      <div id="chart-container">
        <Segment>
          <Dimmer inverted className={this.state.isLoaded ? '' : 'active'}>
            <Loader inverted>Loading</Loader>
          </Dimmer>
          <Dimmer
            inverted
            className={
              this.props.selectedClusters.length !== 0 ? '' : 'active'
            }>
            <Loader inverted>Please choose a cluster.</Loader>
          </Dimmer>
          <div id="chart-list-wrapper">
            <GPUClusterChartLegend lineTypes={this.state.lineTypes} />
            <Line
              ref="chart"
              data={this.state.chartData}
              options={{
                scales: {
                  yAxes: [
                    {
                      scaleLabel: {
                        display: true,
                        labelString: 'Memory',
                      },
                      ticks: {
                        // Include a dollar sign in the ticks
                        callback: function (value, index, values) {
                          return value + ' GB';
                        },
                      },
                    },
                  ],
                  xAxes: [
                    {
                      scaleLabel: {
                        display: true,
                        labelString: 'Time',
                      },
                    },
                  ],
                },
                legend: {
                  display: false,
                },
              }}
            />
            <GPUStatisticChartLegend statistics={Statistic.statistics} />
          </div>
          <div className="ui one buttons">
            <Button>
              <a href="https://vm-manage.oit.duke.edu/containers">
                Reserve GPU
              </a>
            </Button>
          </div>
        </Segment>
      </div>
    );
  }
}

export default GPUChart;
