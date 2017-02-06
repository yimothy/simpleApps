import React, {Component} from 'react';
import Button from './button.jsx';

export default function ButtonsBox(props) {
  let renderButtons = (num) => {
    const numbers = [1,2,3,4,5,6,7,8,9,0];
    let buttons = numbers.map((number, i) => {
      if(number % 3 === 0) {
        return (
          <span>
            <Button value={number}/><br></br>
          </span>
        )
      }
      else {
        return <Button value={number}/>
      }
    })
    return(
      <div>
        {buttons}
      </div>
    )
  }
  return (
    <div>
      {renderButtons()}
    </div>
  )
}
