import moment from 'moment';

class Statistic {
    static statistics = {
        memoryFree: {
            name: 'mem_free',
            displayName: 'Memory Free',
            color: 'rgba(35, 203, 167, 1)'
        },
        memoryUsed: {
            name: 'mem_used',
            displayName: 'Memory Used',
            color: 'rgba(240, 52, 52, 1)'
        }
    };

    constructor(name, cluster, times, values) {
        this.name = name;
        this.cluster = cluster;
        this.times = times;
        this.values = values;
    }

    lineDash = () => {
        return [this.cluster.length % 10, this.cluster.length % 5]
    };

    getXAxisLabels = () => {
        const moments = this.times.map(time => moment.unix(time));
        const labels = moments.map(moment => moment.format('h:mm A'));
        return labels;
    };

    getYValues = () => this.values;
}


export default Statistic;