import axios from 'axios';


export const api = axios.create({
  baseURL: 'https://frozen-woodland-42742.herokuapp.com/',
  timeout: 5000
});