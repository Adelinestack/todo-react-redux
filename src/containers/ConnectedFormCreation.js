import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormCreation from '../components/FormCreation';
import { createTodo, fetchTodolist } from '../actions';

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ createTodo, fetchTodolist }, dispatch);

const ConnectedFormCreation = connect(
  null,
  mapDispatchToProps
)(FormCreation);

export default ConnectedFormCreation;
