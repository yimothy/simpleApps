import React, {Component} from 'react';

export default class ToDoForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      input: '',
    }
    this.updateForm = this.updateForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  updateForm (e) {
    this.setState({
      input: e.target.value,
    })
  }

  handleFormSubmit (e) {

    e.preventDefault();
    this.props.addToDo(this.state.input);
  }

  render () {
    return (
      <form onSubmit={this.handleFormSubmit} >
        <input type='text'
        value={this.state.input}
        onChange={this.updateForm}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
