import React from 'react';

var Button = function(props) {
  return (
    <button onClick={props.onClick}>{ props.text }</button>
  );
}

export default Button;
