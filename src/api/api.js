import axios from "axios";

const client = axios.create({
    baseURL: "https://dsapple.herokuapp.com"
});

export default client;