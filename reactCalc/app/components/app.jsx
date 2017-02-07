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

  handleClick(num) {
    if(num === '+' ||
       num === '-' ||
       num === '*' ||
       num === '/') {
         this.state.operator = num;
         this.state.onFirst = false;
       }
    else if(num === '=') {

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
