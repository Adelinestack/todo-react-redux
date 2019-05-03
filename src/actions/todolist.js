import {
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAILURE,
  SET_CHECKED_STATE,
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
} from './actionTypes';
import { postTodolist, fetchTodolistService } from '../services/todoApi';
import { thunkCreator } from '../utils/thunkCreator';

export const createTodo = item => {
  return thunkCreator({
    types: [CREATE_TODO_REQUEST, CREATE_TODO_SUCCESS, CREATE_TODO_FAILURE],
    promise: postTodolist(item),
  });
};

export const setCheckedState = (id, name, isChecked) => {
  return {
    type: SET_CHECKED_STATE,
    payload: { id, name, isChecked },
  };
};

export const fetchTodolist = () =>
  thunkCreator({
    types: [FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE],
    promise: fetchTodolistService(),
  });
