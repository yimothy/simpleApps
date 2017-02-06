import React, {Component} from 'react';

export default function Display(props) {
  return (
    <div>
      <div>DISPLAY HERE</div>
      <div>{props.value}</div>
    </div>
  )
}
