import React from "react";

import { Link, Redirect } from "react-router-dom";

import { Row, Col, Image } from "react-bootstrap";
import placeholder from "./headshots/profile-placeholder.svg";
import Icon from "../tools/Icon";

function Person(props) {
  const github =
    props.github != null ? <Icon type="github" href={props.github} /> : "";

  const linkedin =
    props.linkedin != null ? (
      <Icon type="linkedin" href={props.linkedin} />
    ) : (
      ""
    );

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ padding: "1rem" }}>
      <div className="person-image">
        <img
          src={
            props.img
              ? props.img[0].thumbnails
                ? props.img[0].thumbnails.small.url
                : placeholder
              : placeholder
          }
          style={{
            height: "120px",
            width: "120px",
            position:"absolute",
            objectFit: "cover",
            borderRadius: "100%",
            zIndex: -1,
            filter: "blur(2px)",
            WebkitFilter: "blur(2px)",
          }}
          onClick={props.onClick}
        />

        <img
          src={
            props.img
              ? props.img[0].thumbnails
                ? props.img[0].thumbnails.large.url
                : props.img[0].url
              : placeholder
          }
          style={{
            height: "120px",
            width: "120px",
            objectFit: "cover",
            borderRadius: "100%",
          }}
          onClick={props.onClick}
        />
      </div>
      <Row>
        <Col xl={12}>
          <center>
            <div style={{ display: "inline-block", padding: "0.5rem 0 0 0" }}>
              {linkedin}
              {github}
            </div>
          </center>
        </Col>
      </Row>
      <div>
        <div style={{ fontSize: "1.5rem" }}>{props.name} </div>
      </div>
    </Col>
  );
}
export default Person;
