import React from 'react';
import {
  Button,
  Card
} from 'react-bootstrap';



class PaperCard extends React.Component {
  state = {};

  render() {
    const authorString =
      this.props.authorFirstName + ' ' + this.props.authorLastName;

    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
        <Card style={{ width: '100%' }}>
          <Card.Body className="project-card">
            <Card.Text>{this.props.publicationDate}</Card.Text>
            <Card.Title style={{ padding: 0 }}>
              <h4>{this.props.title}</h4>
            </Card.Title>
            <Card.Text style={{ paddingBottom: '2rem' }}>
              {authorString}
              <br />
              <br />
              {this.props.abstract}
            </Card.Text>
            <div
              style={{ position: 'absolute', right: '1rem', bottom: '1rem' }}>
              <a href={`//${this.props.link}`}>
                <Button className="theme-button">See more</Button>
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default PaperCard;
