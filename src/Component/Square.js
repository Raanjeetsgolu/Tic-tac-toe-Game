import React from 'react'
const Square = ({ value, onClick }) => {
  const style = value ? `square-btn ${value}` : `square-btn`;
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
