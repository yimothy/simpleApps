import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './ToDoTitle';
import ToDoForm from './toDoForm';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      storage: [],
    }
  }

  addToDo(text) {

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Title />
        <ToDoForm />
      </div>
    );
  }
}

export default App;
