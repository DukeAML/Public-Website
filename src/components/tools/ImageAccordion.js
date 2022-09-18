import React from 'react';
import './responsiveAccordion.scss';

const buckets = [
  {
    title: 'Finance',
    details:
      'Wasted time depositing checks in banks;Inaccurate risk analysis of Bond Portfolios;Bad timing in investing',
  },
  {
    title: 'Food',
    details:
      'Long restaurant wait times;Inefficient delivery scheduling;Unpopular items on the menu;Inefficient inventory management;Long wait times to check;Non-optimal food layout;Inefficient delivery/pick-up scheduling',
  },
  { title: 'Transportation', details: 'Unknown parking availability' },
  {
    title: 'Agriculture',
    details:
      'Inaccurate weather predictions; Inefficient use of water; Unknown pricing of crops/Volume of Market; Inefficient timelines for growing stuff',
  },
  {
    title: 'Sports',
    details:
      'Guessing play calls; Analysis of past averages and prediction of future success',
  },
  {
    title: 'Real Estate',
    details:
      'Limited/Inaccurate information about housing options; Slow matching with appropriate homes/owners',
  },
  {
    title: 'Entertainment',
    details: 'Poor recommendations;Inefficient ticket pricing',
  },
  {
    title: 'Shopping',
    details: 'Poor recommendations; Inefficient ticket pricing',
  },
  {
    title: 'Manufacturing',
    details:
      'Difficult to set up new plant efficiently; Bad at predicting throughput; Poor error analysis',
  },
  {
    title: 'Administration',
    details:
      'Inefficient matching of employee records; Bad at choosing candidates for job; Repetitive tasks',
  },
  { title: 'Commodities', details: 'Oil pricing lag; Poor supply-chain' },
  {
    title: 'Education',
    details:
      'Disconnected students; Deindividualized learning; Evaluating performance',
  },
];

class ImageAccordion extends React.Component {
  constructor() {
    super();
    this.state = {
      buckets: null,
    };
  }

  render() {
    const slides = buckets.map((bucket, key, index) => (
      <li tabindex={index} key={key}>
        <div>
          <a href="#">
            <h2>{bucket.title}</h2>
            <p>
              <ul>
                {bucket.details.split(';').map((bullet, key) => (
                  <div key={key}>{bullet}</div>
                ))}
              </ul>
            </p>
          </a>
        </div>
      </li>
    ));

    return (
      <div className="responsiveAccordion">
        <ul>{slides}</ul>
      </div>
    );
  }
}

export default ImageAccordion;
