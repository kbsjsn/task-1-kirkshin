import React from 'react';
import './Board.css';

function makeRows (cells) {
  const board = [];
  for (let i = 0; i < cells; i++) {
    const row = [];
    if (i % 2 === 0) {
      for (let j = 0; j < cells; j++) {
        if (j % 2 === 0) {
          row.push(<div className="black-cell" key={j}></div>)
        } 
        else {
          row.push(<div className="white-cell" key={j}></div>)
        }
      }
    }
    else {
      for (let j = 0; j < cells; j++) {
        if (j % 2 === 0) {
          row.push(<div className="white-cell" key={j}></div>)
        } 
        else {
          row.push(<div className="black-cell" key={j}></div>)
        }
      }
    }
    board.push(row)
  }
  return board;
}

export default function Board ({ cells }) {
  return (
    <div className="board">
      {
        makeRows(cells).map(row => <div className="row">{row}</div>)
      }
    </div>
  )
}