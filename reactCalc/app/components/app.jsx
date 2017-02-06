import React, {Component} from 'react';
import Display from './display.jsx';
import ButtonsBox from './buttonsBox.jsx';

export default class Calc extends Component {
  constructor () {
    super();
    this.state = {
      display: 0,
      firstNum: '0',
      secondNum: '0',
      onFirst: true,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(num) {
    if(this.state.onFirst ) {
      let firstNum = this.state.firstNum + num;
      this.setState({firstNum: firstNum});
    }
  }

  render() {
    return (
      <div>
      <div>CALCULATOR</div>
        <Display value={this.state.display}/>
        <ButtonsBox onClick={()=>{this.handleClick}}/>
        <div>
          <p>{this.state.firstNum}</p><p>{this.state.secondNum}</p>
        </div>
      </div>
    )
  }
}
