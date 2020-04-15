import './GPUChart.css';
import '../../../../node_modules/react-vis/dist/style.css';
import React from 'react';
import { Dimmer, Loader, Button } from 'semantic-ui-react';
import { Line } from 'react-chartjs-2';
import { AutoSizer } from 'react-virtualized';
import {
    XYPlot,
    XAxis,
    YAxis,
    LineSeries,
    HorizontalGridLines,
    VerticalGridLines,
    DiscreteColorLegend,
    Hint} from 'react-vis';
import Statistic from './../model/Statistic';
import StatisticsPool from './../model/StatisticPool';

class GPUChart extends React.Component {
    state = {chartData: {}, isLoaded: false};

    componentDidMount() {
        this.setState({chartData: {}});
        this.fetchStatisticPool();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.selectedClusters !== prevProps.selectedClusters) {
            this.setState({chartData: {}, isLoaded: false});
            this.fetchStatisticPool();
        }
    }

    async fetchStatisticPool() {
        const statisticsPool = await StatisticsPool.fetchStatisticPool(this.props.statistics, this.props.selectedClusters);
        this.setState({chartData: statisticsPool.convertToChartData(), isLoaded: true});
    }

    render() {
        return (
            <div id="chart-container">
                <Dimmer inverted className={this.state.isLoaded ? '' : 'active'}>
                    <Loader inverted active>Loading</Loader>
                </Dimmer>
                <Dimmer inverted className={this.props.selectedClusters.length !== 0 ? '' : 'active'}>
                    <Loader inverted active>Please choose a cluster.</Loader>
                </Dimmer>
                <div id="chart-list-wrapper">
                    <Line
                        ref="chart"
                        data={this.state.chartData}
                        options={{
                            scales: {
                                yAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Memory'
                                    },
                                    ticks: {
                                        // Include a dollar sign in the ticks
                                        callback: function(value, index, values) {
                                            return value + ' GB';
                                        }
                                    }
                                }],
                                xAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Time'
                                    }
                                }]
                            }
                        }}
                        />
                </div>
                <div className="ui one buttons">
                    <Button><a href="https://vm-manage.oit.duke.edu/containers">Reserve GPU</a></Button>
                </div>
            </div>
        );
    }
}

export default GPUChart;