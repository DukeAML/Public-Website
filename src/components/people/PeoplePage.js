import React from 'react';
import {
	Container,
	Jumbotron,
	Button,
	Row,
	Col,
	Image,
	Card,
	Carousel,
	Accordion,
	Collapse,
	Spinner,
} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

import Footer from '../tools/Footer';
import Navigation from '../tools/Navigation';
import withWindowDimensions from './withWindowDimensions';
import { getMembers } from '../../api/api';
import { getMemberData } from './PeopleData';

import Details from './Details';
import Person from './Person';
import PeopleRow from './PeopleRow';
//import { CRM, DS, PS } from "./PeopleData";

//const peopleInfo = [CRM, DS, PS];

class PeoplePage extends React.Component {
	state = {
		loading: true,
		details: {},
		collapse: false,
		members: { EXEC: [], CRM: [], DS: [], PS: [] },
	};

	componentDidMount = async () => {
		const members = await getMemberData();
		console.log(members);
		this.setState({ loading: false, members: members });
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

		return this.state.loading ? (
			<div style={{ height: '10rem', padding: '3rem' }}>
				<Spinner animation='grow' size='md' />
			</div>
		) : (
			result
		);
	}

	render() {
		const { EXEC, PM, DS, SWE, HRD } = this.state.members;

		let EXECgrid = this.makePeopleGrid(EXEC, this.props.windowWidth);
		let PMgrid = this.makePeopleGrid(PM, this.props.windowWidth);
		let DSgrid = this.makePeopleGrid(DS, this.props.windowWidth);
		let SWEgrid = this.makePeopleGrid(SWE, this.props.windowWidth);
		let HRDgrid = this.makePeopleGrid(HRD, this.props.windowWidth);
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

		// center titles on mobile

		let EXECtitle, PMtitle, DStitle, SWEtitle, HRDtitle;

		if (window <= 576) {
			EXECtitle = <center> Executive Team </center>;
			PMtitle = <center> Product Manager Team</center>;
			DStitle = <center> Data Science Team </center>;
			SWEtitle = <center> Software Engineer Team </center>;
			HRDtitle = <center> Hardware Engineer Team </center>;
		} else {
			EXECtitle = 'Executive Team';
			PMtitle = 'Product Manager Team';
			DStitle = 'Data Science Team';
			SWEtitle = 'Software Engineer Team';
			HRDtitle = 'Hardware Engineer Team';
		}

		return (
			<Container fluid style={{ padding: 0 }}>
				<Navigation />

				<div style={{ minHeight: '85vh' }}>
					<div className='title'>
						<center>Our Members</center>
					</div>
					<div className='team' style={{ padding: `1rem ${padding}%` }}>
						{EXECtitle}
						<hr />
					</div>
					<center>{EXECgrid}</center>
					<div className='team' style={{ padding: `1rem ${padding}%` }}>
						{PMtitle}
						<hr />
					</div>
					<center>{PMgrid}</center>
					<div className='team' style={{ padding: `1rem ${padding}%` }}>
						{DStitle}
						<hr />
					</div>
					<center>{DSgrid}</center>
					<div className='team' style={{ padding: `1rem ${padding}%` }}>
						{SWEtitle}
						<hr />
					</div>
					<center>{SWEgrid}</center>
					<div className='team' style={{ padding: `1rem ${padding}%` }}>
						{HRDtitle}
						<hr />
					</div>
					<center>{HRDgrid}</center>
				</div>

				<Footer />
			</Container>
		);
	}
}

export default withWindowDimensions(PeoplePage);
