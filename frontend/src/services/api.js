// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:4000/api'; // URL de ton backend

export const signup = (userData) => {
  return axios.post(`${API_URL}/users/signup`, userData);
};

export const login = (userData) => {
  return axios.post(`${API_URL}/users/login`, userData);
};
