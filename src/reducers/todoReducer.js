import { SET_CHECKED_STATE, FETCH_TODO_SUCCESS } from '../actions/actionTypes';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TODO_SUCCESS:
      return action.payload;
    case SET_CHECKED_STATE:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default todoReducer;
