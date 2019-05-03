import { JSON_STORE } from '../utils/jsonStore';
import axios from 'axios';

export const postTodolist = async data => {
  return await axios.post(`${JSON_STORE}/todolists/${Date.now()}`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const fetchTodolistService = async () => {
  const {
    data: { result },
  } = await axios.get(`${JSON_STORE}/todolists`);
  return result;
};
