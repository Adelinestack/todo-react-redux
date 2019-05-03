import mockAxios from 'jest-mock-axios';
import { postTodolist, fetchTodolistService } from './todoApi';
import { JSON_STORE } from '../utils/jsonStore';

describe('Test post todolist', () => {
  afterAll(() => {
    mockAxios.reset();
  });

  test('Should call axios with right param', () => {
    Date.now = jest.fn(() => 1);

    postTodolist({
      id: 1,
      name: 'test',
      isChecked: false,
    });
    expect(mockAxios.post).toHaveBeenCalledWith(
      `${JSON_STORE}/todolists/1`,
      {
        id: 1,
        name: 'test',
        isChecked: false,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  });
});

describe('Test fetch todolist', () => {
  afterAll(() => {
    mockAxios.reset();
  });

  test('Should destructure axios response', async () => {
    mockAxios.get.mockResolvedValue({ data: { result: [] } });
    const todolist = await fetchTodolistService();
    expect(todolist).toEqual([]);
  });

  test('Should call axios with right param', async () => {
    await fetchTodolistService();
    expect(mockAxios.get).toHaveBeenCalledWith(`${JSON_STORE}/todolists`);
  });
});
