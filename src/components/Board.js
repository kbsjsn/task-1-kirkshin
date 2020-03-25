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

  const [selectedPiece, setSelectedPiece] = useState(); // selectedPiece is string rep board arr indexes
  const [nextMoveLeft, setNextMoveLeft] = useState()
  const [nextMoveRight, setNextMoveRight] = useState()

  if (selectedPiece) {
    let nextRow;
    const currCol = +selectedPiece[1]
    if (board[selectedPiece[0]][selectedPiece[1]] === 'top') {
      // check bottom diagonals
      nextRow = +selectedPiece[0] + 1;
      if ((board[nextRow][currCol + 1] || board[nextRow][currCol + 1] === undefined) && nextMoveRight !== null) {
        setNextMoveRight(null)
      }
      if ((board[nextRow][currCol - 1] || board[nextRow][currCol - 1] === undefined) && nextMoveLeft !== null) {
        setNextMoveLeft(null)
      }
    }
    if (board[selectedPiece[0]][selectedPiece[1]] === 'bottom') {
      nextRow = +selectedPiece[0] - 1;
      // check top diagonals
      if ((board[nextRow][currCol + 1] || board[nextRow][currCol + 1] === undefined) && nextMoveRight !== null) {
        setNextMoveRight(null)
      }
      if ((board[nextRow][currCol - 1] || board[nextRow][currCol - 1] === undefined) && nextMoveLeft !== null) {
        setNextMoveLeft(null)
      }
    }
    if (board[nextRow][currCol + 1] === null && `${nextRow}${currCol + 1}` !== nextMoveRight) {
      setNextMoveRight(`${nextRow}${currCol + 1}`)
    }
    if (board[nextRow][currCol - 1] === null && `${nextRow}${currCol - 1}` !== nextMoveLeft) {
      setNextMoveLeft(`${nextRow}${currCol - 1}`);
    }
    // else {
    //   if (nextMoveRight) {
    //     setNextMoveRight(null)
    //   }
    //   if (nextMoveLeft) {
    //     setNextMoveRight(null)
    //   }
    // }
  }

  const renderBoard = (board, pieceColor, pieceShape) => {
    return board.map((row, i) => <div className="row" key={i}>
      {
        row.map((cell, j) => {
            if ((cell === 'top' && pieceColor === 'red') || (cell === 'bottom' && pieceColor === 'black')) {
              return (
                <div 
                  className={`
                    ${(i + j) % 2 === 0 ? 'black-cell' : 'white-cell'}
                    ${(nextMoveLeft === `${i}${j}` || nextMoveRight === `${i}${j}`) && 'next-move'}
                  `} 
                  key={`${i}${j}`} 
                >
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
                <div 
                  className={`
                    ${(i + j) % 2 === 0 ? 'black-cell' : 'white-cell'}
                    ${(nextMoveLeft === `${i}${j}` || nextMoveRight === `${i}${j}`) && 'next-move'}
                  `} 
                  key={`${i}${j}`} 
                >
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
              <div 
                className={`
                  ${(i + j) % 2 === 0 ? 'black-cell' : 'white-cell'}
                  ${(nextMoveLeft === `${i}${j}` || nextMoveRight === `${i}${j}`) && 'next-move'}
                `} 
                key={`${i}${j}`}
              >
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