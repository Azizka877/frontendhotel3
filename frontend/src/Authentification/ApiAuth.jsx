
// api.js

import axios from 'axios';

const API_Principal = 'https://hotel-manag1.onrender.com'; 

export const registerAdmi = async (userData) => {
  try {
    const response = await axios.post(`${API_Principal}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

export const loginAdmi = async (userData) => {
  try {
    const response = await axios.post(`${API_Principal}/login`, userData);
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
