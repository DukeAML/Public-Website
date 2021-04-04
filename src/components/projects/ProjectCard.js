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
  Image,
  Button,
  Card,
} from "react-bootstrap";

import Navigation from "../tools/Navigation";

import { Link } from "react-router-dom";

const projects = [];

class ProjectCard extends React.Component {
  state = { featureText: "" };

  render() {
    const imageSrc = this.props.img
      ? this.props.img
      : require("./images/DAML_Full_Grey_Transparent.svg");

    let teamButtons = [];
    if (this.props.teams) {
      teamButtons = this.props.teams.map((team, index) => {
        return (
          <div class={"team-button"} key={index}>
            {team === "Hardware" ? "HRD" : team}
          </div>
        );
      });
    }

    if (this.props.isFeatured) {
      setTimeout(
        () => this.setState({ featureText: this.props.description }),
        500
      );
    } else if (this.state.featureText) {
      this.setState({ featureText: "" });
    }

    let cardStyle = {
      width: "100%",
      
    };

    return (
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <Card style={cardStyle}>
          <Card.Body className="project-card">
            <div
              style={{
                width: "48px",
                height: "48px",
                marginRight: "1rem",
                position: "absolute",
                left: "1rem",
                top: "1rem",
                justifyContent: "center",
                flexDirection: "column",
                display: "flex",
              }}
            >
              {" "}
              <img
                src={imageSrc}
                style={{
                  maxWidth: "48px",
                  maxHeight: "48px",
                }}
              />
            </div>

            <Card.Title
              style={{
                padding: 0,
                marginLeft: "48px",
                backgroundColor: "#fff",
                paddingLeft: "1rem",
                minHeight: "48px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h4 style={{ verticalAlign: "middle" }}>{this.props.title}</h4>
            </Card.Title>
            <hr />

            <Card.Text style={{ padding: "1rem 0 0 0" }}>
              {this.props.shortDescription
                ? this.props.shortDescription
                : "Check out 'See More' for more information."}
            </Card.Text>

            <Card.Text
              style={{
                padding: "1rem 0 3rem 0",
                overflow: "hidden",
                whiteSpace: "pre-wrap",
              }}
            >
              {this.state.featureText}
            </Card.Text>
            <div class="team-buttons">{teamButtons}</div>
            <div
              style={{ position: "absolute", right: "1rem", bottom: "1rem" }}
            >
              <Button
                className="theme-button"
                onClick={() => this.props.callback(this.props.index)}
              >
                {this.props.isFeatured ? "Close" : "See more"}
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProjectCard;
