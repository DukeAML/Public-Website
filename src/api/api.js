import axios from "axios";

const client = axios.create({
  baseURL: "https://dukeappml.herokuapp.com",
});

var base;
try {
  base = require("airtable").base("app7oThcZBwecbqqS");
  console.log("airtable success");
} catch (e) {
  console.log(e);
}

export const getProjects = async () => {
  const { data } = await client.get("/projects");
  console.log(data);
  return data;
};

export const getMembers = async () => {
  const { data } = await client.get("/users");
  console.log(data);
  return data;
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
