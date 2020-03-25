import React from 'react';

export default function Input ({ setCells }) {

  return (
    <div className="inputbar">
      <input onChange={e => setCells(e.target.value)} />
      <input type="radio" id="red-piece" name="color" value="red"></input>
      <label for="redPiece">Red</label>
      <input type="radio" id="black-piece" name="color" value="black"></input>
      <label for="blackPiece">Black</label>
    </div>
  )
}