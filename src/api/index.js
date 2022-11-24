import axios from 'axios';

const API = axios.create({baseURL: 'https://api.agify.io'})

export const getInfo = (searchQuery) => API.get(`/?name=${searchQuery}`)
