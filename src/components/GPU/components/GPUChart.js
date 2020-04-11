import './GPUChart.css';
import React from 'react';
import { Dimmer, Loader, Button } from 'semantic-ui-react';
import { Line } from 'react-chartjs-2';
import StatisticsPool from './../model/StatisticPool';

class GPUChart extends React.Component {
    state = {chartData: {}, isLoaded: false};

    componentDidMount() {
        this.setState({chartData: {}});
        this.fetchStatisticPool();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.cluster !== prevProps.cluster) {
            this.setState({chartData: {}, isLoaded: false});
            this.fetchStatisticPool();
        }
    }

    async fetchStatisticPool() {
        const statisticsPool = await StatisticsPool.fetchStatisticPool(this.props.statistics, this.props.cluster);
        this.setState({chartData: statisticsPool.convertToChartData(), isLoaded: true});
    }

    render() {
        return (
            <div id="chart-container">
                <Dimmer inverted className={this.state.isLoaded ? '' : 'active'}>
                    <Loader inverted>Loading</Loader>
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
                        redraw
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