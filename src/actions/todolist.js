import { CREATE_TODO, SET_CHECKED_STATE } from './actionTypes';

export const createTodo = () => {
  return {
    type: CREATE_TODO,
    payload: {
      1: { id: 1, name: 'Acheter carottes', isChecked: false },
      2: { id: 2, name: 'Laver le linge', isChecked: false },
      3: { id: 3, name: 'Cuire pizza', isChecked: false },
    },
  };
};

export const setCheckedState = (id, name, isChecked) => {
  return {
    type: SET_CHECKED_STATE,
    payload: { id, name, isChecked },
  };
};
