import axios from 'axios';

export default axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://vcm-14326.vm.duke.edu:5000/stat/'
});