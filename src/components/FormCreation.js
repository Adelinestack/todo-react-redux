import React, { Component } from 'react';

class FormCreation extends Component {
  state = {
    itemName: '',
  };

  onInputChange = ({ target: { value: itemName } }) =>
    this.setState({ itemName });

  onValidate = async () => {
    const { createTodo, fetchTodolist } = this.props;
    const { itemName } = this.state;
    await createTodo({
      id: Date.now(),
      name: itemName,
      isChecked: false,
    });
    await fetchTodolist();
  };

  render() {
    return (
      <div>
        <h3>Ajouter une tâche</h3>
        <div>
          <label htmlFor="itemName">Tâche : </label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            onChange={this.onInputChange.bind(this)}
          />
        </div>
        <button onClick={this.onValidate}>Valider</button>
      </div>
    );
  }
}

export default FormCreation;
