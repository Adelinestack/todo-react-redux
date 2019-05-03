import React, { Component } from 'react';
import Item from './Item';

class Todolist extends Component {

  
  componentDidMount() {
    this.props.fetchTodolist();
  }
  
  render() {
    const { todolist = {}, setCheckedState } = this.props;
    return (
      <div>
        <ul>
          {Object.values(todolist).map((todo, i) => (
            <li key={i.toString()}>
              <Item {...todo} setCheckedState={setCheckedState} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todolist;
