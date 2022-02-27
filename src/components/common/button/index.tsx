import React from 'react';
import './button.css';

type Props = {
  type: ButtonType;
  text: string;
  className?: string;
  onClick: Function;
}

const Button: React.FC<Props> = ({
  type,
  text,
  className = "",
  onClick
}) => {
  return (
    <button className={"default " + className} type={type} onClick={() => onClick()}>
      {text}
    </button>
  )
}

export default Button
