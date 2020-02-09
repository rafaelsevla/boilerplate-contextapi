import axios from 'axios';
import CONSTANTS from '../constants';
import swal from '@sweetalert/with-react';

const client = axios.create({
  baseURL: CONSTANTS.API.BASE,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 30000
});

client.interceptors.request.use(
  async config => {
    const token = await localStorage.getItem('data/token');
    config.headers.Authorization = `bearer ${token}`;
    return config;
  },
  err => Promise.reject(err)
);

client.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      await localStorage.removeItem('data/token');
    }
    try {
      console.error(error.response.data.message);
      return Promise.reject(error);
    } catch (e) {
      swal('Erro ao acessar o servidor');
    }
  }
);

export default client;
