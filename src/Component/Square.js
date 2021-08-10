import React from 'react'
const Square = ({ value, onClick }) => (
  <button className="square-btn" onClick={onClick}>
    {value}
  </button>
);

export default Square;
