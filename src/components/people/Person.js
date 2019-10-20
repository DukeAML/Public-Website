import React from "react";

import { Col, Image } from "react-bootstrap";

function Person(props) {
  return (
    <Col sm={6} md={4}>
      <Image
        src={props.src}
        fluid
        roundedCircle
        style={{ width: "100px" }}
        onClick={props.onClick}
      />
      <div style={{ color: "#f0efe5" }}>
        {props.name} <br />
        {props.team} Team
      </div>
    </Col>
  );
}
export default Person;
