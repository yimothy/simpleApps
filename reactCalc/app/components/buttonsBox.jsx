import React, {Component} from 'react';
import Button from './button.jsx';

export default function ButtonsBox(props) {
  let renderNums = () => {
    const numbers = [1,2,3,4,5,6,7,8,9,0];
    let buttons = numbers.map((number, i) => {
      if(number % 3 === 0) {
        return (
          <span>
            <Button key={i} value={number}/><br></br>
          </span>
        )
      }
      else {
        return <Button key={i} value={number}/>
      }
    })
    return(
      <div>
        {buttons}
      </div>
    )
  }

  let renderOperators = () => {
    const operators = ['+', '-', '*', '/', '=']
    return (
      <div>
        {operators.map((op, i) => {
          return <Button key={i} value={op} />
        })}
      </div>
    )
  }

  return (
    <div>
      {renderNums()}
      {renderOperators()}
    </div>
  )
}
