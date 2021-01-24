import axios from 'axios';

const client = axios.create({
	baseURL: 'https://dukeappml.herokuapp.com',
});

const Airtable = require('airtable');
Airtable.configure({
	endpointUrl: 'https://api.airtable.com',
	apiKey: 'keyF6lKZWNkqR9j3I', // Remove to push to git
});
var base = Airtable.base('app7oThcZBwecbqqS');

export const getProjects = async () => {
	const { data } = await client.get('/projects');
	console.log(data);
	return data;
};

export const getMembers = async () => {
	// Old CMS Integration
	// const { data } = await client.get("/users");
	// console.log(data);
	// return data;

	let members = [];

	const records = await base('Full Roster')
		.select({ view: 'Roster [Internal]' })
		.all();
	records.map((record) => {
		members.push(record._rawJson.fields);
	});

	return members;
};

export const getPapers = async () => {
	const { data } = await client.get('./papers');
	console.log(data);
	return data;
};

export const getNews = async () => {
	const { data } = await client.get('./newsentries');
	console.log(data);
	return data;
};

export default { getProjects, getPapers, getNews, getMembers };