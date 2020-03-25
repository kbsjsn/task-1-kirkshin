import React, { useState } from 'react';
import './Board.css';

export default function Board ({ cells, board, setBoard, pieceColor, pieceShape }) {
  
  const [selectedPiece, setSelectedPiece] = useState(); // selectedPiece is string rep board arr indexes
  const [nextMoveLeft, setNextMoveLeft] = useState();
  const [nextMoveRight, setNextMoveRight] = useState();
  const [turn, setTurn] = useState('top');

  if (selectedPiece) {
    let nextRow;
    const currCol = +selectedPiece[1];
    if (board[selectedPiece[0]][selectedPiece[1]] === 'top') {
      // check bottom diagonals
      nextRow = +selectedPiece[0] + 1;
      // sets to null invalid next move state
      if ((board[nextRow][currCol + 1] || board[nextRow][currCol + 1] === undefined) && nextMoveRight !== null) {
        setNextMoveRight(null)
      }
      if ((board[nextRow][currCol - 1] || board[nextRow][currCol - 1] === undefined) && nextMoveLeft !== null) {
        setNextMoveLeft(null)
      }
    }
    if (board[selectedPiece[0]][selectedPiece[1]] === 'bottom') {
      // check top diagonals
      nextRow = +selectedPiece[0] - 1;
      // sets to null invalid next move state
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
  }

  // will be called onClick in the next valid cell
  const handleNextMove = (i, j) => {
    if (nextMoveLeft === `${i}${j}` || nextMoveRight === `${i}${j}`) {
      const newBoard = board.map(row => row.map(cell => cell));
      newBoard[selectedPiece[0]][selectedPiece[1]] = null;   // prev position
      newBoard[i][j] = board[selectedPiece[0]][selectedPiece[1]];   // next position
      setSelectedPiece(null)
      setNextMoveRight(null)
      setNextMoveLeft(null)
      setTurn(turn === 'top' ? 'bottom' : 'top');
      setBoard(newBoard)
    }
  };

  const renderBoardFromModel = (board, pieceColor, pieceShape) => {
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
                  onClick={() => handleNextMove(i, j)}
                  key={`${i}${j}`} 
                >
                  <div className={`red-piece 
                      ${pieceShape === 'circle' ? 'circle' : 'square'}
                      ${selectedPiece === `${i}${j}` && 'selected-piece'}
                    `} 
                    onClick={() => {
                        if (board[i][j] === turn) {
                          setSelectedPiece(`${i}${j}`)
                        }
                      }
                    }
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
                  onClick={() => handleNextMove(i, j)}
                  key={`${i}${j}`} 
                >
                  <div 
                    className={`black-piece 
                      ${pieceShape === 'circle' ? 'circle' : 'square'}
                      ${selectedPiece === `${i}${j}` && 'selected-piece'}
                    `} 
                    onClick={() => {
                        if (board[i][j] === turn) {
                          setSelectedPiece(`${i}${j}`)
                        }
                      }
                    }
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
                onClick={() => handleNextMove(i, j)}
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

  // rendering Board component
  return (
    <div className="board">
      {
        renderBoardFromModel(board, pieceColor, pieceShape)
      }
    </div>
  )
}