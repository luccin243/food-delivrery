import axios from 'axios';
import { API } from '../config';
import isToday from 'dayjs/plugin/isToday';
import dayjs from 'dayjs';

dayjs.extend(isToday);

export const signin = async (user) => {
  try {
    const response = await axios.post(`${API}/api/signin`, user);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify({ ...data, date: new Date() }));
    next();
  }
};

export const signout = (next) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
    next();
    return axios
      .get(`${API}/api/signout`)
      .then((response) => {
        console.log('signout', response);
      })
      .catch((error) => console.log(error));
  }
};

export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwt')) {
    const { date } = JSON.parse(localStorage.getItem('jwt'));
    if (dayjs(date).isToday()) {
      return JSON.parse(localStorage.getItem('jwt'));
    }
    localStorage.removeItem('jwt');
    return false;
  } else {
    return false;
  }
};
