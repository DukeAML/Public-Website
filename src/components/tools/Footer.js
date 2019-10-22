import React from "react";
import { Container } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <Container fluid className="footer" style={{ margin: "2rem 0 0 0" }}>
        <center>(C) Yasa Baig</center>
      </Container>
    );
  }
}

export default Footer;
