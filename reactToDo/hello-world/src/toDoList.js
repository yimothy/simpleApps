import React, {Component} from 'react';

export default class ToDoList extends Component {

  render() {
    // const todos = this.props.toDoList.map((item) => {
    //   return <div>{item}</div>
    // });
    return (
      <div>
      {this.props.toDoList.map((item) => {
        return <div>{item}</div>
      })}
      </div>
    )
  }
}
