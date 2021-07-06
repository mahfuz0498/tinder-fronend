import axios from 'axios';

const instance = axios.create({
    baseURL : "https://mahtinder.herokuapp.com"
})

export {instance};