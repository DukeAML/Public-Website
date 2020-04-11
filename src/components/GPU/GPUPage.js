import './GPUPage.css';
import React from 'react';
import { Container, Tab } from 'semantic-ui-react';
import GPUInfo from './components/GPUInfo';
import StatisticsPool from './model/StatisticPool';
import GPUChart from './components/GPUChart';
import withWindowDimensions from '../people/withWindowDimensions';

class GPUPage extends React.Component {
  state = {panes: []};

  componentDidMount() {
    this.updatePanes();
  }

  async updatePanes() {
    const clusters = await StatisticsPool.fetchClusterNames();
    const panes = clusters.map(cluster => {
      return {
        menuItem: cluster,
        render: () => (
            <Tab.Pane attached={false}>
              <GPUChart cluster={cluster} statistics={["mem_free", "mem_used"]} />
            </Tab.Pane>
        )
      }
    });
    this.setState({panes: panes});
  }

  render() {
    return (
        <Container>
          <div className="main-content">
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            <GPUInfo />
            <div style={{ height: 2 + "rem" }}></div>
            <h3>Clusters and GPUs at Duke</h3>
            <Tab menu={{ secondary: true, className: 'wrapped' }} panes={this.state.panes} />
          </div>
        </Container>
    );
  }
}

export default withWindowDimensions(GPUPage);
