import React from 'react';
import './button.scss';
import '../../styles/main-styles.scss';

// this is simple component

export const Button = (props) => {
  return (
    <div className = {`button ${props.color != undefined ? props.color : ''}`} >
      {props.value}
    </div>)
};
