import './GPUChart.css';
import React from 'react';
import { Segment, Dimmer, Loader, Button } from 'semantic-ui-react';
import { Line } from 'react-chartjs-2';
import { Parser as HtmlToReactParser } from 'html-to-react';
import StatisticsPool from './../model/StatisticPool';
import Statistic from '../model/Statistic';

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
        const htmlToReactParser = new HtmlToReactParser();
        return (
            <div id="chart-container">
                <Segment>
                <Dimmer inverted className={this.state.isLoaded ? '' : 'active'}>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
                <Dimmer inverted className={this.props.selectedClusters.length !== 0 ? '' : 'active'}>
                    <Loader inverted>Please choose a cluster.</Loader>
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
                            },
                            legend: {
                                display: false,
                            },
                            legendCallback: function(chart) {
                                const legendItems = Object.keys(Statistic.statistics).map((key, index) => {
                                    return `<div>
                                            <svg width="20" height="20" style="display: inline-block; margin-right: 5px;">
                                                <rect width="20" height="20" style="fill:${Statistic.statistics[key].color};" />
                                            </svg>
                                            <p style="display: inline-block;">${Statistic.statistics[key].displayName}</p>
                                            </div>`
                                });
                                return `<div style="display: flex; flex-direction: row; justify-content: space-around;">${legendItems.join('')}</div>`;
                            }
                        }}
                        />
                    {this.refs.chart && htmlToReactParser.parse(this.refs.chart.chartInstance.generateLegend())}
                </div>
                <div className="ui one buttons">
                    <Button><a href="https://vm-manage.oit.duke.edu/containers">Reserve GPU</a></Button>
                </div>
                </Segment>
            </div>
        );
    }
}

export default GPUChart;