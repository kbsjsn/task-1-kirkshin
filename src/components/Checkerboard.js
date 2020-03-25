import React, { useState } from 'react';
import Input from './Input';
import Board from './Board';
import { makeBoard } from '../utils';

export default function Checkboard () {
  const [cells, setCells] = useState(8);
  const [board, setBoard] = useState(makeBoard(cells));
  const [pieceColor, setPieceColor] = useState('red');
  const [pieceShape, setPieceShape] = useState('circle')


  return (
    <>
      <Input 
        cells={cells}
        setCells={setCells} 
        setPieceColor={setPieceColor} 
        setPieceShape={setPieceShape}
        setBoard={setBoard}
      />
      <Board 
        cells={cells} 
        board={board}
        setBoard={setBoard}
        pieceColor={pieceColor}
        pieceShape={pieceShape}
      />
    </>
  )
}