import React from "react";

import { Col, Image } from "react-bootstrap";

function Person(props) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ padding: "1rem" }}>
      <Image
        src={props.src}
        fluid
        roundedCircle
        style={{ width: "100px" }}
        onClick={props.onClick}
      />
      <div style={{ color: "#f0efe5" }}>
        <div style={{ fontSize: "1.5rem" }}>{props.name} </div>
        {props.team} Team
      </div>
    </Col>
  );
}
export default Person;
