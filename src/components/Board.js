import React from 'react';
import './Board.css';

const redPiece = (
  <div className="red-piece"></div>
);

const blackPiece = (
  <div className="black-piece"></div>
);

const blackCell = (key, piece = null) => (
  <div className="black-cell" key={key}>{piece}</div>
);

const whiteCell = (key, piece = null) => (
  <div className="white-cell" key={key}>{piece}</div>
);

function makeRows (cells) {
  const board = [];
  for (let i = 0; i < cells; i++) {
    const row = [];
    if (i < 2) {
      if (i % 2 === 0) {
        for (let j = 0; j < cells; j++) {
          if (j % 2 === 0) {
            row.push(blackCell(j, redPiece))
          } 
          else {
            row.push(whiteCell(j, redPiece))
          }
        }
      }
      else {
        for (let j = 0; j < cells; j++) {
          if (j % 2 === 0) {
            row.push(whiteCell(j, redPiece))
          } 
          else {
            row.push(blackCell(j, redPiece))
          }
        }
      }
    }
    else if (i >= cells - 2) {
      if (i % 2 === 0) {
        for (let j = 0; j < cells; j++) {
          if (j % 2 === 0) {
            row.push(blackCell(j, blackPiece))
          } 
          else {
            row.push(whiteCell(j, blackPiece))
          }
        }
      }
      else {
        for (let j = 0; j < cells; j++) {
          if (j % 2 === 0) {
            row.push(whiteCell(j, blackPiece))
          } 
          else {
            row.push(blackCell(j, blackPiece))
          }
        }
      }
    }
    else {
      if (i % 2 === 0) {
        for (let j = 0; j < cells; j++) {
          if (j % 2 === 0) {
            row.push(blackCell(j))
          } 
          else {
            row.push(whiteCell(j))
          }
        }
      }
      else {
        for (let j = 0; j < cells; j++) {
          if (j % 2 === 0) {
            row.push(whiteCell(j))
          } 
          else {
            row.push(blackCell(j))
          }
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