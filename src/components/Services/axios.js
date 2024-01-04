import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addContact = async newContact => {
  const response = await axios.post('/contacts', newContact);
  return response.data;
};

export const deleteContact = async itemId => {
  const response = await axios.delete(`/contacts/${itemId}`);
  return response.data;
};

export const registerUser = async credentials => {
  const response = await axios.post('/users/signup', credentials);
  return response.data;
};

export const loginUser = async credentials => {
  const response = await axios.post('/users/login', credentials);
  return response.data;
};

export const logOutUser = async () => {
  const response = await axios.post('/users/logout');
  return response.data;
};

export const reloadUser = async () => {
  const response = await axios.get('/users/current');
  return response.data;
};

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
