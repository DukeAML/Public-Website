import React from "react";

import { Link, Redirect } from "react-router-dom";

import { Row, Col, Image } from "react-bootstrap";

function Person(props) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ padding: "1rem" }}>
      <div className="person-image">
        <Image
          src={props.src}
          fluid
          roundedCircle
          style={{ width: "120px" }}
          onClick={props.onClick}
        />
      </div>
      <Row>
        <Col xl={12}>
          <center>
            <div style={{ display: "inline-block", padding: "0.5rem 0 0 0" }}>
              <Link to="/">
                <div
                  className="github-icon button ripple"
                  style={{ float: "left" }}
                ></div>
              </Link>
              <Link to="/">
                <div
                  className="linkedin-icon button"
                  style={{ float: "left" }}
                ></div>
              </Link>
            </div>
          </center>
        </Col>
      </Row>
      <div style={{ color: "#f0efe5" }}>
        <div style={{ fontSize: "1.5rem" }}>{props.name} </div>
        {props.team} Team
      </div>
    </Col>
  );
}
export default Person;
