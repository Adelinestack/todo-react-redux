import { createStore } from 'redux';
import { createTodo } from '../actions';
import appReducer from '../reducers';

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(createTodo());

export default store;
