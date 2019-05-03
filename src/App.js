import React from 'react';
import { Provider } from 'react-redux';
import store from './store/';
import ConnectedTodolist from './containers/ConnectedTodolist';
import ConnectedFilter from './containers/ConnectedFilter';
import ConnectedFormCreation from './containers/ConnectedFormCreation';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <ConnectedTodolist />
          <ConnectedFilter />
          <ConnectedFormCreation />
        </header>
      </div>
    </Provider>
  );
}

export default App;
