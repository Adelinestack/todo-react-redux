import todoReducer from './todoReducer';

test('Fetch todo', () => {
  let state;
  state = todoReducer(
    {},
    {
      type: 'FETCH_TODO_SUCCESS',
      payload: {
        '1556786624262': {
          id: 1556786624262,
          isChecked: false,
          name: 'Acheter tomates',
        },
        '1556786626912': {
          id: 1556786626912,
          isChecked: false,
          name: 'Acheter tomates',
        },
      },
    }
  );
  expect(state).toEqual({
    '1556786624262': {
      id: 1556786624262,
      isChecked: false,
      name: 'Acheter tomates',
    },
    '1556786626912': {
      id: 1556786626912,
      isChecked: false,
      name: 'Acheter tomates',
    },
  });
});

test('Set checked state', () => {
  let state;
  state = todoReducer(
    {},
    {
      type: 'SET_CHECKED_STATE',
      payload: {
        id: 1556786624262,
        isChecked: true,
        name: 'Acheter tomates',
      },
    }
  );
  expect(state).toEqual({
    '1556786624262': {
      id: 1556786624262,
      isChecked: true,
      name: 'Acheter tomates',
    },
  });
});
