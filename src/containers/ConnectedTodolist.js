import { connect } from 'react-redux';
import Todolist from '../components/Todolist';
import { createTodo, setCheckedState, fetchTodolist } from '../actions';

const mapStateToProps = state => {
  if (state.filter === 'all') {
    return { todolist: state.todolist };
  } else {
    const filteredTodo = Object.values(state.todolist)
      .filter(({ isChecked }) => isChecked === false)
      .reduce((acc, todo) => {
        return { ...acc, [todo.id]: todo };
      }, {});
    return { todolist: filteredTodo };
  }
};

const mapDispatchToProps = (dispatch, props) => ({
  createTodo: item => dispatch(createTodo(item)),
  fetchTodolist: () => dispatch(fetchTodolist()),
  setCheckedState: (id, name, isChecked) =>
    dispatch(setCheckedState(id, name, isChecked)),
});

const ConnectedTodolist = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todolist);

export default ConnectedTodolist;
