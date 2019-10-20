import React from "react";

import { Collapse } from "react-bootstrap";

class Details extends React.Component {
  state = { people: [], current: null };

  componentDidMount = () => {
    this.setState({ people: this.props.people });
  };

  render() {
    return (
      <Collapse in={this.props.display}>
        <div className="person-details inset">{this.state.current}</div>
      </Collapse>
    );
  }
}

export default Details;
