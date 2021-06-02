import axios from "axios";

const client = axios.create({
  baseURL: "https://dukeappml.herokuapp.com",
});

export const getProjects = async () => {
  const { data } = await client.get("./projects");
  console.log(data);
  return data;
};

export const getProjectsMembers = async () => {
  const { data } = await client.get("./projects/people");
  console.log(data);
  return data;
};

export const getMembers = async () => {
  const { data } = await client.get("./people");
  console.log(data);
  return data;
};

export const getTFEProjects = async () => {
  const { data } = await client.get("./techforequity");
  console.log(data);
  return data;
};

export const getTFEMembers = async () => {
  const { data } = await client.get("./techforequity/people");
  console.log(data);
  return data;
};

export const getTFEFellows = async () => {
  const { data } = await client.get("./techforequity/fellows");
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

export default {
  getProjects,
  getProjectsMembers,
  getMembers,
  getTFEProjects,
  getTFEMembers,
  getTFEFellows,
  getPapers,
  getNews,
};
