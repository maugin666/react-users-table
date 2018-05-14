import React, { Component } from 'react';

import Form from './Form';

const Popup = ({onClick, userId, title}) => {
  return (
    <div>
      <div
        className="popup"
        onClick={onClick}
        userId={userId}
      >
        <div className="close-popup">X</div>
        <h2>{title}</h2>
        <Form />
      </div>
      <div className="overflow"></div>
    </div>
  );
};

export default Popup;
