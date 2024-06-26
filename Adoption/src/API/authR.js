import axios from './axios';

//const API = "http://localhost:4000/API";
//creamos una funcion que se comunica con el backend enviandole el usuario por parametro.
// usando un POST

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verifyRequest = () => axios.get('/auth/verify');

