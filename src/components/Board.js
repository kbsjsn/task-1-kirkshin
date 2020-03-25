import React from 'react';
import './Board.css';

export default function Board ({ cells, pieceColor, pieceShape }) {

  const redPiece = (
    <div className={`red-piece + ${pieceShape === 'circle' ? 'circle' : 'square'}`}></div>
  );
  
  const blackPiece = (
    <div className={`black-piece + ${pieceShape === 'circle' ? 'circle' : 'square'}`}></div>
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
        let piece = pieceColor === 'red' ? redPiece : blackPiece;
        if (i % 2 === 0) {
          for (let j = 0; j < cells; j++) {
            if (j % 2 === 0) {
              row.push(blackCell(j, piece))
            } 
            else {
              row.push(whiteCell(j, piece))
            }
          }
        }
        else {
          for (let j = 0; j < cells; j++) {
            if (j % 2 === 0) {
              row.push(whiteCell(j,  piece))
            } 
            else {
              row.push(blackCell(j, piece))
            }
          }
        }
      }
      else if (i >= cells - 2) {
        let piece = pieceColor === 'red' ? blackPiece : redPiece;
        if (i % 2 === 0) {
          for (let j = 0; j < cells; j++) {
            if (j % 2 === 0) {
              row.push(blackCell(j, piece))
            } 
            else {
              row.push(whiteCell(j, piece))
            }
          }
        }
        else {
          for (let j = 0; j < cells; j++) {
            if (j % 2 === 0) {
              row.push(whiteCell(j, piece))
            } 
            else {
              row.push(blackCell(j, piece))
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

  return (
    <div className="board">
      {
        makeRows(cells).map(row => <div className="row">{row}</div>)
      }
    </div>
  )
}