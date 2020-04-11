import Statistic from './Statistic';
import gpustatistics from '../api/gpustatistics';

class StatisticsPool {
    constructor(statistics) {
        this.statistics = statistics;
    }

    static async fetchClusterNames() {
        try {
            const startTime = new Date(new Date().getTime() - (31 * 60 * 1000));
            const endTime = new Date().getTime() / 1000;

            const statisticsResponse = await gpustatistics.get(`/mem_free`, {
                params: { startTime, endTime, stepSize: '30m' }
            });
            return Object.keys(statisticsResponse.data);
        } catch(error) {
            console.log(error);
        }
    }

    static async fetchStatisticPool(statisticNames, cluster) {
        try {
            let statistics = [];

            for (const statisticName of statisticNames) {
                const startTime = new Date(new Date().getTime() - (12 * 60 * 60 * 1000));
                const endTime = new Date().getTime() / 1000;

                const statisticsResponse = await gpustatistics.get(`/${statisticName}`, {
                    params: { startTime, endTime, stepSize: '30m' }
                });

                const matchingCluster = Object.entries(statisticsResponse.data).find(([key, val]) => key === cluster);
                const statistic = new Statistic(statisticName, matchingCluster[1].times, matchingCluster[1].values);

                statistics.push(statistic);
            }

            return new StatisticsPool(statistics);
        } catch(error) {
            console.log(error);
        }
    }

    convertToChartData = () => {
        if (this.statistics.length === 0) return {};
        const statisticsReadableName = {
            mem_free: 'Memory Free',
            mem_used: 'Memory Used'
        };
        const data = {
            // Assume that the labels will be the same for all data.
            labels: this.statistics[0].getXAxisLabels(),
            datasets: this.statistics.map(statistic => {
                return {
                    label: statisticsReadableName[statistic.name],
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: statistic.getYValues()
                }
            })
        };
        return data;
    }
}

export default StatisticsPool;