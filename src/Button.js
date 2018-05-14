import React from 'react';

const Button = ({className, onClick, userId, text}) => {
  return (
    <div
      className={className}
      onClick={onClick}
      userId={userId}>
      {text}
    </div>
  );
};

export default Button;
