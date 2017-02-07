import React, {Component} from 'react';
import Display from './display.jsx';
import ButtonsBox from './buttonsBox.jsx';

export default class Calc extends Component {
  constructor () {
    super();
    this.state = {
      display: 0,
      firstNum: '',
      secondNum: '',
      onFirst: true,
      operator: null,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleEqual(operator) {
    if(operator === '+')
      return parseInt(this.state.firstNum) + parseInt(this.state.secondNum);
    else if(operator === '-')
      return parseInt(this.state.firstNum) - parseInt(this.state.secondNum);
    else if(operator === '*')
      return parseInt(this.state.firstNum) * parseInt(this.state.secondNum);
    else if(operator === '/')
      return parseInt(this.state.firstNum) / parseInt(this.state.secondNum);
  }
  handleClick(num) {
    if(num === '+' ||
       num === '-' ||
       num === '*' ||
       num === '/') {
         this.setState({operator: num, onFirst: false});
       }
    else if(num === '=') {
      this.setState({display: this.handleEqual(this.state.operator)})
      this.setState({firstNum: '', secondNum: '', onFirst: true})
    }
    else if(this.state.onFirst) {
      let firstNum = this.state.firstNum + num;
      this.setState({firstNum});
    }
    else {
      let secondNum = this.state.secondNum + num;
      this.setState({secondNum});
    }

  }

  render() {
    return (
      <div>
      <div>CALCULATOR</div>
        <Display value={this.state.display}/>
        <ButtonsBox onClick={this.handleClick}/>
        <div>
          <p>{this.state.firstNum}</p><p>{this.state.secondNum}</p>
        </div>
      </div>
    )
  }
}
