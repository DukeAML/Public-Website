import React from 'react';
import Statistic from '../model/Statistic';

const GPUStatisticChartLegend = props => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {
            Object.keys(props.statistics).map((key, index) => {
                return <div key={Statistic.statistics[key].name}>
                    <svg width="20" height="20" style={{display: 'inline-block', marginRight: '5px'}}>
                        <rect width="20" height="20" style={{fill: Statistic.statistics[key].color}} />
                    </svg>
                    <p style={{display: 'inline-block'}}>{Statistic.statistics[key].displayName}</p>
                </div>
            })
        }
        </div>
    )
};

export default GPUStatisticChartLegend;