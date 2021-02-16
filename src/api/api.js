import axios from "axios";

const client = axios.create({
  baseURL: "https://dukeappml.herokuapp.com",
});

const Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "", // Remove to push to git
});
var base = Airtable.base("app7oThcZBwecbqqS");

export const getProjects = async () => {
  // const { data } = await client.get('/projects');
  // console.log(data);
  // return data;

  let projects = [];

  const pRecords = await base("Projects")
    .select({
      // Selecting the first 3 records in Projects [Internal]:
      view: "Projects [Internal]",
    })
    .all();
  pRecords.map((record) => {
    record = record._rawJson.fields;

    if (record["Status"] === "Active/In progress") {
      projects.push(record);
    }
  });
  console.log(projects);
  return projects;
};

export const getMembers = async () => {
  const members = [];

  // Pull all member records
  const records = await base("Full Roster")
    .select({ view: "Internal" })
    .all();

  // Pull all degrees
  const degrees = await base("Degree Programs")
    .select({ view: "Grid view" })
    .all();

  // Convert from list to key value
  let degreeTable = {};
  degrees.map((degree) => {
    degreeTable[degree.id] = degree.get("Name");
  });

  // Add all stripped records to list with real major values
  records.map((record) => {
    record = record._rawJson.fields;

    record["Degree"] = [];
    for (let degreeID of record["Major(s), Minor(s)"]) {
      record["Degree"].push(degreeTable[degreeID]);
    }

    // Code to remove "Other (specify..."
    let interestLength = record["Tech Interests"].length;
    if (
      record["Tech Interests"][interestLength - 1] ===
      'Other (specify in "Additional Information" section)'
    ) {
      record["Tech Interests"].pop();
      if (interestLength === 1) record["Tech Interests"] = null;
    }

    members.push(record);
  });

  return members;
};

export const getPapers = async () => {
  const { data } = await client.get("./papers");
  console.log(data);
  return data;
};

export const getNews = async () => {
  const { data } = await client.get("./newsentries");
  console.log(data);
  return data;
};

export default { getProjects, getPapers, getNews, getMembers };
