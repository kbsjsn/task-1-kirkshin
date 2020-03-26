import React, { useState } from 'react';
import Input from './Input';
import Board from './Board';
import { makeBoard } from '../utils';

export default function Checkboard () {
  let initCells = window.localStorage.getItem('myGameCells');
  if (!initCells) {
    initCells = 8;
  }
  const [cells, setCells] = useState(initCells);
  let initBoard = window.localStorage.getItem('myGameBoard');
  if (!initBoard) {
    initBoard = makeBoard(cells)
  }
  else {
    const pieces = initBoard.split(',');
    initBoard = makeBoard(cells, pieces)
  }
  console.log('board...', initBoard)
  const [board, setBoard] = useState(initBoard);   // model of board as an array of arrays
  const [pieceColor, setPieceColor] = useState('red');
  const [pieceShape, setPieceShape] = useState('circle')

  return (
    <>
      <Input 
        cells={cells}
        board={board}
        setCells={setCells} 
        setPieceColor={setPieceColor} 
        setPieceShape={setPieceShape}
        setBoard={setBoard}
      />
      <Board 
        board={board}
        setBoard={setBoard}
        pieceColor={pieceColor}
        pieceShape={pieceShape}
      />
    </>
  )
}