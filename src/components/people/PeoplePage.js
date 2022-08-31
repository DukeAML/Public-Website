import React from 'react';
import { Container, Button, Collapse, Spinner } from 'react-bootstrap';

import Footer from '../tools/Footer';
import Navigation from '../tools/Navigation';
import withWindowDimensions from './withWindowDimensions';
import { getMemberData } from './PeopleData';

import PeopleRow from './PeopleRow';

class PeoplePage extends React.Component {
  state = {
    loading: true,
    details: {},
    teamData: {
      EXEC: { open: true, members: [], title: 'Executive Team' },
      DS: { open: true, members: [], title: 'Data Science Team' },
      SWE: { open: true, members: [], title: 'Software Engineer Team' },
      PM: { open: true, members: [], title: 'Product Manager Team' },
      HRD: { open: true, members: [], title: 'Hardware Engineer Team' },
    },
  };

  componentDidMount = async () => {
    const members = await getMemberData();
    console.log('Members', members);
    this.setState({
      loading: false,
      teamData: {
        EXEC: { ...this.state.teamData.EXEC, members: members.EXEC },
        DS: { ...this.state.teamData.DS, members: members.DS },
        SWE: { ...this.state.teamData.SWE, members: members.SWE },
        PM: { ...this.state.teamData.PM, members: members.PM },
        HRD: { ...this.state.teamData.HRD, members: members.HRD },
      },
    });
  };

  makePeopleGrid(people, window) {
    // determine number of people per row based on bootstrap screen breakpoints
    let cols;
    if (window >= 992) {
      // lg or xl; 4 people per row
      cols = 4;
    } else if (window >= 768) {
      // m; 4 people per row
      cols = 3;
    } else if (window >= 576) {
      // xs; 2 people per row
      cols = 2;
    } else {
      //xs; 1 person per row
      cols = 1;
    }

    console.log('Cols: ', cols);
    console.log(people.length);

    const numRows = Math.ceil(people.length / cols);
    console.log('rows: ', numRows);

    let rowArrays = [];
    // make each row, add details section below

    for (let i = 0; i < numRows * cols; i += cols) {
      rowArrays[i] = people.slice(i, i + cols);
    }

    let result = rowArrays.map((row, index) => (
      <PeopleRow people={row} key={index} />
    ));

    return this.state.loadingFellows ? (
      <div style={{ height: '10rem', padding: '2rem', margin: 'auto' }}>
        <Spinner animation="grow" size="md" style={{ marginRight: '3rem' }} />
        <Spinner animation="grow" size="md" style={{ marginRight: '3rem' }} />
        <Spinner animation="grow" size="md" />
      </div>
    ) : (
      result
    );
  }

  render() {
    let window = this.props.windowWidth;
    let padding;

    // dynamically determine left and right padding around people grid
    if (window >= 992) {
      // lg or xl
      padding = 20;
    } else if (window >= 768) {
      // m
      padding = 5;
    } else if (window >= 576) {
      // s
      padding = 10;
    } else {
      // xs
      padding = 5;
    }

    // define collapse text on mobile

    let collapseText, collapseStyle;

    if (window <= 576) {
      collapseText = {
        isOpen: '-',
        isClosed: '+',
      };

      collapseStyle = {
        fontWeight: 'bold',
      };
    } else {
      collapseText = {
        isOpen: 'Collapse',
        isClosed: 'Expand',
      };
    }

    // initialize list of teams
    const teamList = Object.entries(this.state.teamData).map((team, index) => {
      const grid = this.makePeopleGrid(team[1].members, this.props.windowWidth);

      return (
        <div key={index}>
          {' '}
          <div className="team" style={{ padding: `1rem ${padding}%` }}>
            {team[1].title}
            <Button
              variant="light"
              onClick={() =>
                this.setState({
                  teamData: {
                    ...this.state.teamData,
                    [team[0]]: { ...team[1], open: !team[1].open },
                  },
                })
              }
              style={collapseStyle}>
              {team[1].open ? collapseText.isOpen : collapseText.isClosed}
            </Button>
            <hr />
          </div>
          <Collapse in={team[1].open}>
            <center>{grid}</center>
          </Collapse>
        </div>
      );
    });

    return (
      <Container fluid style={{ padding: 0 }}>
        <Navigation />
        <div style={{ minHeight: '85vh' }}>
          <div className="title">
            <center>Our Members</center>
          </div>

          {teamList}
        </div>
        <Footer />
      </Container>
    );
  }
}

export default withWindowDimensions(PeoplePage);
