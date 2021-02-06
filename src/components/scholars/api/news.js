import axios from 'axios';

export default axios.create({
  baseURL: 'http://newsapi.org',
  headers: {
    Authorization: 'Client-ID c63eb52b5bc642909941c92d6f638a83'
  }
});