import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [square, setsquare] = useState(Array(9).fill(null));
  const [X, setX] = useState(true);

  const Winner = CalWinner(square);
  let Status;
  var win = false;
  if (Winner) {
    win = true;
    Status = "Winner : " + Winner;
  } else {
    Status = "Player turn :" + (X ? "X" : "O");
  }
  const rendersquare = (i) => {
    return <Square value={square[i]} onClick={() => handleclick(i)} />;
  };
  const handleclick = (i) => {
    const squares = square.slice();

    if (squares[i] === null && win === false) {
      squares[i] = X ? "X" : "O";
      setsquare(squares);
      setX(!X);
    } else if (squares[i] !== null) {
      alert("You want to rewrite the value sorry you cann't do that ");
    } else {
      alert("Winner is Decleared ");
    }
  };
  function CalWinner(square) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }
  return (
    <div className="board">
      <div className="board-row">
        {rendersquare(0)}
        {rendersquare(1)}
        {rendersquare(2)}
      </div>
      <div className="board-row">
        {rendersquare(3)}
        {rendersquare(4)}
        {rendersquare(5)}
      </div>
      <div className="board-row">
        {rendersquare(6)}
        {rendersquare(7)}
        {rendersquare(8)}
      </div>
      <h3> {Status}</h3>
    </div>
  );
}

export default Board;
