import "./GPUPage.css";
import React from "react";

import Navigation from "../tools/Navigation";
import Footer from "../tools/Footer";
import { Spinner } from "react-bootstrap";
import { Container, Tab } from "semantic-ui-react";
import GPUInfo from "./components/GPUInfo";
import StatisticsPool from "./model/StatisticPool";
import GPUChart from "./components/GPUChart";
import withWindowDimensions from "../people/withWindowDimensions";

class GPUPage extends React.Component {
  state = { panes: [], loadingClusters: true };

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
      };
    });
    this.setState({ panes: panes, loadingClusters: false });
  }

  render() {
    let window = this.props.windowWidth;
    let padding;

    // dynamically determine left and right padding around projects grid
    if (window >= 992) {
      // lg or xl
      padding = 15;
    } else if (window >= 768) {
      // m
      padding = 4;
    } else if (window >= 576) {
      // s
      padding = 2;
    } else {
      // xs
      padding = 1;
    }

    return (
      <div>
        <Navigation />
        <Container
          fluid
          style={{ padding: 0, minHeight: "95vh", padding: `0 ${padding}%` }}
        >
          <div style={{ marginTop: "1rem" }}>
            <GPUInfo />
          </div>
          <div style={{ padding: "3rem 0" }}>
            <center>
              {this.state.loadingClusters ? (
                <div style={{ fontSize: "2rem", padding: "3rem" }}>
                  <Spinner animation="grow" size="lg" /> <br />
                  <br />
                  Loading clusters
                </div>
              ) : (
                <Tab
                  menu={{ secondary: true, className: "wrapped" }}
                  panes={this.state.panes}
                />
              )}
            </center>
          </div>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default withWindowDimensions(GPUPage);
