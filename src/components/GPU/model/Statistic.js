import moment from 'moment';

class Statistic {
    constructor(name, times, values) {
        this.name = name;
        this.times = times;
        this.values = values;
    }

    getXAxisLabels = () => {
        const moments = this.times.map(time => moment.unix(time));
        const labels = moments.map(moment => moment.format('h:mm A'));
        return labels;
    };

    getYValues = () => this.values;
}

export default Statistic;