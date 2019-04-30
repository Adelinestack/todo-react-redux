import { CREATE_TODO, SET_CHECKED_STATE } from '../actions/actionTypes';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_TODO:
      return action.payload;
    case SET_CHECKED_STATE:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default todoReducer;
