import React, { useState } from 'react';
import Input from './Input';
import Board from './Board';

export default function Checkboard () {
  const [cells, setCells] = useState(8);
  const [pieceColor, setPieceColor] = useState('red');
  const [pieceShape, setPieceShape] = useState('circle')

  return (
    <>
      <Input 
        setCells={setCells} 
        setPieceColor={setPieceColor} 
        setPieceShape={setPieceShape}
      />
      <Board 
        cells={cells} 
        pieceColor={pieceColor}
        pieceShape={pieceShape}
      />
    </>
  )
}