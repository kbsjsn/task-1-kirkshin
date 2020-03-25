import React, { useState } from 'react';
import Input from './Input';
import Board from './Board';

export default function Checkboard () {
  const [cells, setCells] = useState(8);

  return (
    <>
      <Input setCells={setCells} />
      <Board cells={cells} />
    </>
  )
}