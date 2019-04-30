import { connect } from 'react-redux';
import FilterList from '../components/FilterList';
import { setFilter } from '../actions/';

const mapStateToProps = state => {
  return { type: state.post };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilter: type => dispatch(setFilter(type)),
  };
};

const ConnectedFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterList);

export default ConnectedFilter;
