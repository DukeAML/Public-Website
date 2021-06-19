import React from 'react';
import {
  Container,
  Row,
  Col,
  Spinner,
  Jumbotron,
  Table,
  td,
  thead,
  OverlayTrigger,
  Tooltip,
  Card,
} from 'react-bootstrap';

import Navigation from '../tools/Navigation';
import withWindowDimensions from '../people/withWindowDimensions';

import { Link } from 'react-router-dom';

class ProjectCard extends React.Component {
  state = { expanded: false };

  render() {
    const imageSrc = this.props.img;

    let fellows = [];
    let pWidth = 12 / this.props.maxFellows;
    for (let i = 0; i < this.props.maxFellows; i++) {
      fellows.push(
        <Col
          xl={pWidth}
          sm={pWidth}
          xs={pWidth}
          md={pWidth}
          style={{
            backgroundColor: i < this.props.fellows ? '#d0f0fd' : '#d1d1d1',
            width: '100%',
            borderRight:
              i < this.props.maxFellows - 1 ? '1px dashed black' : '',
          }}>
          <center>{i + 1}</center>
        </Col>,
      );
    }

    let teamButtons = [];
    let teamAbrv = {
      'Data Analytics/Science': 'DS',
      'Software Engineering/Technology': 'SWE',
      Design: 'De',
      'Project Management': 'PM',
      Research: 'Re',
    };
    let teamColors = {
      SWE: '#d0f0fd',
      DS: '#d1f7c4',
      PM: '#cfdfff',
      Re: '#f7dfd3',
      De: '#FFF',
    };
    if (this.props.position) {
      teamButtons = this.props.position.map((team, index) => {
        return (
          <OverlayTrigger
            key={team}
            placement={'top'}
            overlay={<Tooltip id={`tooltip-top`}>{team}</Tooltip>}>
            <div
              key={index}
              style={{
                backgroundColor: teamColors[teamAbrv[team]],
                borderRadius: '100%',
                color: '#050404',
                display: 'grid',
                placeItems: 'center',
                width: '2.5rem',
                height: '2.5rem',
                border: 'none',
                marginRight: '.5rem',
              }}
              overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
              {teamAbrv[team]}
            </div>
          </OverlayTrigger>
        );
      });
    }

    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
        <Card style={{ width: '100%' }}>
          <div style={{}}>
            <center>
              <img
                src={imageSrc}
                style={{ width: '100%', maxHeight: '10rem' }}
              />
            </center>
          </div>
          <Card.Body className="tfe-project-card">
            <Card.Title style={{ padding: 0 }}>
              <h4>{this.props.title}</h4>
            </Card.Title>

            <Card.Text
              style={{
                padding: '1rem 0 0 0',
                overflow: 'auto',
              }}>
              <a style={{ fontWeight: 'bold' }}>Project Title: </a>
              {this.props.proj_title}
            </Card.Text>

            <Card.Text
              style={{
                padding: '1rem 0',
                overflow: 'auto',
                maxHeight: '14rem',
              }}>
              {this.props.description}
            </Card.Text>
            <div
              style={{
                position: 'absolute',
                right: '1rem',
                bottom: '1rem',
              }}></div>
            <Card.Text style={{ padding: '1rem 0' }}>
              <b>Fellows: </b>
              {this.props.fellows}
            </Card.Text>
            <Card.Text style={{ padding: '.5rem 0' }}>
              <b>Positions: </b>
              <div
                style={{
                  marginTop: '.5rem',
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                {teamButtons}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProjectCard;
