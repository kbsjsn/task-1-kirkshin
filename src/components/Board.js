import React, { useState } from 'react';
import './Board.css';

const makeBoard = (cells) => {
  const board = [];
  for (let i = 0; i < cells; i++) {
    const row = [];
    for (let j = 0; j < cells; j++) {
      if (i < 2) { 
        row.push('top')
      }
      else if (i >= cells - 2) {
        row.push('bottom')
      }
      else {
        row.push(null)
      }
    }
    board.push(row)
  }
  return board
}

export default function Board ({ cells, pieceColor, pieceShape }) {
  const board = makeBoard(cells);

  const [selectedPiece, setSelectedPiece] = useState();

  const renderBoard = (board, pieceColor, pieceShape) => {
    return board.map((row, i) => <div className="row" key={i}>
      {
        row.map((cell, j) => {
            if ((cell === 'top' && pieceColor === 'red') || (cell === 'bottom' && pieceColor === 'black')) {
              return (
                <div className={`${(i + j) % 2 === 0 ? 'black-cell' : 'white-cell'}`} key={`${i}${j}`} >
                  <div className={`red-piece 
                      ${pieceShape === 'circle' ? 'circle' : 'square'}
                      ${selectedPiece === `${i}${j}` && 'selected-piece'}
                    `} 
                    onClick={() => setSelectedPiece(`${i}${j}`)}
                  ></div>
                </div>
              )
            }
            if ((cell === 'top' && pieceColor === 'black') || (cell === 'bottom' && pieceColor === 'red')) {
              return (
                <div className={`${(i + j) % 2 === 0 ? 'black-cell' : 'white-cell'}`} key={`${i}${j}`} >
                  <div 
                    className={`black-piece 
                      ${pieceShape === 'circle' ? 'circle' : 'square'}
                      ${selectedPiece === `${i}${j}` && 'selected-piece'}
                    `} 
                    onClick={() => setSelectedPiece(`${i}${j}`)}
                  ></div>
                </div>
              )
            }
            return (
              <div className={`${(i + j) % 2 === 0 ? 'black-cell' : 'white-cell'}`} key={`${i}${j}`}>
              </div>
            )
          }
        )
      }
      </div>  
    )
  }

  return (
    <div className="board">
      {
        renderBoard(board, pieceColor, pieceShape)
      }
    </div>
  )
}