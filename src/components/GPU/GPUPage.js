import "./GPUPage.css";
import React from "react";

import Navigation from "../tools/Navigation";
import Footer from "../tools/Footer";
import { Spinner } from "react-bootstrap";
import { Container, Tab, Input, Accordion, Icon } from "semantic-ui-react";
import GPUInfo from "./components/GPUInfo";
import StatisticsPool from "./model/StatisticPool";
import GPUChart from "./components/GPUChart";
import withWindowDimensions from "../people/withWindowDimensions";

class GPUPage extends React.Component {
  state = { panes: [], loadingClusters: true, search: "", activeIndex: [1, 2] };

  componentDidMount() {
    this.updatePanes();
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex.includes(index)
      ? activeIndex.filter(i => i != index)
      : [...activeIndex, index];

    console.log(newIndex);

    this.setState({ activeIndex: [...newIndex] });
  };

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
    console.log(this.state.panes);
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ search: value });
  };

  filterClusters = clusters => {
    return this.state.search
      ? clusters.filter(cluster => cluster.menuItem.includes(this.state.search))
      : clusters;
  };

  render() {
    let window = this.props.windowWidth;
    let padding;
    const { activeIndex } = this.state;

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
          style={{
            padding: 0,
            minHeight: "95vh",
            padding: `0 ${padding}%`,
            fontfamily: "Nora"
          }}
        >
          <center>
            <div className="title"> GPUs </div>
          </center>
          <div style={{ marginTop: "1rem" }}>
            <Accordion>
              <Accordion.Title
                active={activeIndex.includes(1)}
                index={1}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                <span className="gpu-header">
                  All about GPUs
                  <hr />
                </span>
              </Accordion.Title>
              <Accordion.Content active={activeIndex.includes(1)}>
                <GPUInfo />
              </Accordion.Content>
              <Accordion.Title
                active={activeIndex.includes(2)}
                index={2}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                <span className="gpu-header">
                  Active clusters at Duke
                  <hr />
                </span>
              </Accordion.Title>
              <Accordion.Content active={activeIndex.includes(2)}>
                <div style={{ padding: "1rem 0" }}>
                  <center>
                    {this.state.loadingClusters ? (
                      <div style={{ fontSize: "2rem", padding: "3rem" }}>
                        <Spinner animation="grow" size="lg" /> <br />
                        <br />
                        Loading clusters
                      </div>
                    ) : (
                      <div>
                        <Input
                          icon="search"
                          placeholder="Search for a cluster"
                          onChange={this.handleSearchChange}
                          value={this.state.search}
                          style={{ width: "20rem", margin: "2rem" }}
                        />

                        <Tab
                          menu={{ secondary: true, className: "wrapped" }}
                          panes={this.filterClusters(this.state.panes)}
                        />
                      </div>
                    )}
                  </center>
                </div>
              </Accordion.Content>
            </Accordion>
          </div>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default withWindowDimensions(GPUPage);
