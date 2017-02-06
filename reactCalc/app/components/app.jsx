import React, {Component} from 'react';
import Display from './display.jsx';

export default class Calc extends Component {
  constructor () {
    super();
    this.state = {
      value: 10,
    }
  }
  render() {
    return (
      <div>
      <div>Hello!</div>
        <Display value={this.state.value}/>
      </div>
    )
  }
}
