import React, { Component } from 'react';
import Title from './ToDoTitle';
import ToDoForm from './toDoForm';
import ToDoList from './toDoList';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      storage: [],
    }
    this.addToDo = this.addToDo.bind(this);
  }

  addToDo(text) {
    let todo = {text, id: Date.now()}
    console.log("todo: ", todo);
    this.state.storage.push(todo);
    this.setState({storage: this.state.storage})
  }

  render() {
    return (
      <div className="App">
        <Title />
        <ToDoForm addToDo={this.addToDo} />
        <ToDoList toDoList={this.state.storage}/>
      </div>
    );
  }
}

export default App;
