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

    static async fetchStatisticPool(statisticNames, clusters) {
        try {
            let statistics = [];

            for (const statisticName of statisticNames) {
                const startTime = new Date(new Date().getTime() - (12 * 60 * 60 * 1000)).getTime() / 1000;
                const endTime = new Date().getTime() / 1000;

                let statisticsResponse;

                const cachedTime = JSON.parse(localStorage.getItem('cachedGPUStatisticTime'));

                if (Date.now() / 1000 - cachedTime < 5 * 60 && localStorage.hasOwnProperty(`cachedGPUStatistics_${statisticName}`)) {
                    statisticsResponse = JSON.parse(localStorage.getItem(`cachedGPUStatistics_${statisticName}`));
                } else {
                    statisticsResponse = await gpustatistics.get(`/${statisticName}`, { params: { startTime, endTime, stepSize: '30m' } });

                    localStorage.setItem(`cachedGPUStatistics_${statisticName}`, JSON.stringify(statisticsResponse));
                    localStorage.setItem('cachedGPUStatisticTime', JSON.stringify(endTime));
                }

                let matchingClusters = Object.entries(statisticsResponse.data).filter(([key, val]) => clusters.includes(key));

                console.log(matchingClusters);

                matchingClusters.forEach(matchingCluster => {
                    const values = matchingCluster[1].values.map(value => value / 1073741824);
                    const statistic = new Statistic(statisticName, matchingCluster[0], matchingCluster[1].times, values);
                    statistics.push(statistic);
                });
            }
            return new StatisticsPool(statistics);
        } catch(error) {
            console.log(error);
        }
    }

    convertToChartData = () => {
        if (this.statistics.length === 0) return {};
        const data = {
            // Assume that the labels will be the same for all data.
            labels: this.statistics[0].getXAxisLabels(),
            datasets: this.statistics.map(statistic => {
                const statisticConfigKey = Object.keys(Statistic.statistics).find((key, index) => Statistic.statistics[key].name === statistic.name);
                const statisticConfig = Statistic.statistics[statisticConfigKey];
                return {
                    label: statistic.cluster,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: statisticConfig.color,
                    borderColor: statisticConfig.color,
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: statisticConfig.color,
                    pointBackgroundColor: statisticConfig.color,
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: statisticConfig.color,
                    pointHoverBorderColor: statisticConfig.color,
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