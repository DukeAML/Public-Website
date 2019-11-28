import React from "react";
import { Container } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <Container fluid className="footer" style={{ margin: "2rem 0 0 0" }}>
        <center>
          Questions, comments? Contact us:
          <br />
          <a className="contact" href="mailto: info@dukeaml.com">
            info@dukeaml.com
          </a>{" "}
          • (320) 333-8531
        </center>
      </Container>
    );
  }
}

export default Footer;
