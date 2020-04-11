import Statistic from './Statistic';
import gpustatistics from '../api/gpustatistics';

class StatisticsPool {
    constructor(statistics) {
        this.statistics = statistics;
    }

    static async fetchClusterNames() {
        try {
            const startTime = new Date(new Date().getTime() - (31 * 60 * 1000)).getTime() / 1000;
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
                const startTime = new Date(new Date().getTime() - (12 * 60 * 60 * 1000)).getTime() / 1000;
                const endTime = new Date().getTime() / 1000;

                let statisticsResponse;

                const cachedTime = JSON.parse(localStorage.getItem('cachedGPUStatisticTime'));

                if (Date.now() / 1000 - cachedTime < 5 * 60 && localStorage.hasOwnProperty(`cachedGPUStatistics_${statisticName}`)) {
                    statisticsResponse = JSON.parse(localStorage.getItem(`cachedGPUStatistics_${statisticName}`));
                    console.log(localStorage.getItem(`cachedGPUStatistics_${statisticName}`));
                } else {
                    statisticsResponse = await gpustatistics.get(`/${statisticName}`, { params: { startTime, endTime, stepSize: '30m' } });

                    localStorage.setItem(`cachedGPUStatistics_${statisticName}`, JSON.stringify(statisticsResponse));
                    localStorage.setItem('cachedGPUStatisticTime', JSON.stringify(endTime));
                }

                const matchingCluster = Object.entries(statisticsResponse.data).find(([key, val]) => key === cluster);
                matchingCluster[1].values = matchingCluster[1].values.map(value => value / 1073741824); // Convert to gigabytes

                const statistic = new Statistic(statisticName, matchingCluster[1].times, matchingCluster[1].values);
                console.log(statistic);
                statistics.push(statistic);
            }

            return new StatisticsPool(statistics);
        } catch(error) {
            console.log(error);
        }
    }

    convertToChartData = () => {
        if (this.statistics.length === 0) return {};
        const statisticsConfig = {
            mem_free: {
                name: 'Memory Free',
                color: "rgba(35, 203, 167, 1)"
            },
            mem_used: {
                name: 'Memory Used',
                color: "rgba(240, 52, 52, 1)"
            }
        };
        const data = {
            // Assume that the labels will be the same for all data.
            labels: this.statistics[0].getXAxisLabels(),
            datasets: this.statistics.map(statistic => {
                return {
                    label: statisticsConfig[statistic.name].name,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: statisticsConfig[statistic.name].color,
                    borderColor: statisticsConfig[statistic.name].color,
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: statisticsConfig[statistic.name].color,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: statisticsConfig[statistic.name].color,
                    pointHoverBorderColor: statisticsConfig[statistic.name].color,
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