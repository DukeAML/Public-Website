import axios from "axios";

const client = axios.create({
  baseURL: "https://dukeappml.herokuapp.com"
});

export const getProjects = async () => {
  const { data } = await client.get("/projects");
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

export default { getProjects, getPapers, getNews };
