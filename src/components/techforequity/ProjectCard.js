import React from "react";
import {
  Container,
  Row,
  Col,
  Spinner,
  Jumbotron,
  Table,
  td,
  thead,
  tr,
  Button,
  Card,
} from "react-bootstrap";

import Navigation from "../tools/Navigation";
import withWindowDimensions from "../people/withWindowDimensions";

import { Link } from "react-router-dom";

const projects = [];

class ProjectCard extends React.Component {
  state = { expanded: false };

  render() {
    const imageSrc = this.props.img;

    return (
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <Card style={{ width: "100%" }}>
          <div style={{}}>
            <center>
              <img
                src={imageSrc}
                style={{ width: "100%", maxHeight: "10rem" }}
              />
            </center>
          </div>
          <Card.Body className="tfe-project-card">
            <Card.Title style={{ padding: 0 }}>
              <h4>{this.props.title}</h4>
            </Card.Title>

            <Card.Text
              style={{
                padding: "1rem 0 0 0",
                overflow: "auto",
              }}
            >
              <a style={{ fontWeight: "bold" }}>Project Title: </a>
              {this.props.proj_title}
            </Card.Text>

            <Card.Text
              style={{
                padding: "1rem 0",
                overflow: "auto",
                height: "14rem",
              }}
            >
              {this.props.description}
            </Card.Text>
            <div
              style={{ position: "absolute", right: "1rem", bottom: "1rem" }}
            ></div>
            <Card.Text style={{ padding: "1rem 0" }}>
              <b>Fellows: </b>
              {this.props.fellows}
            </Card.Text>
            <Card.Text style={{ paddingBottom: "1rem" }}>
              <b>Positions Available: </b>
              {this.props.position.join(", ")}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProjectCard;
