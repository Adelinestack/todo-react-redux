import filterReducer from './filterReducer';

test('reducers', () => {
  let state;
  state = filterReducer('all', { type: 'SET_FILTER', payload: 'todo' });
  expect(state).toEqual('todo');
});
