import React from 'react';
import './Input.css';

export default function Input ({ setCells, setPieceColor, setPieceShape }) {

  return (
    <div className="inputbar">
      <input onChange={e => setCells(e.target.value)} className="textfield"/>
      <div>
        Top Piece Color:
        <input type="radio" id="red-piece" name="color" value="red" 
          defaultChecked
          onChange={e => setPieceColor(e.target.value)}
        />
        <label htmlFor="red-piece">Red</label>
        <input type="radio" id="black-piece" name="color" value="black"
          onChange={e => setPieceColor(e.target.value)}
        />
        <label htmlFor="black-piece">Black</label>
      </div>
      <div>
        Shape:
        <input type="radio" id="circle-piece" name="shape" value="circle"
          onChange={e => setPieceShape(e.target.value)}
          defaultChecked
        />
        <label htmlFor="circle-piece">Circle</label>
        <input type="radio" id="square-piece" name="shape" value="square"
          onChange={e => setPieceShape(e.target.value)}
        />
        <label htmlFor="square-piece">Square</label>
      </div>
    </div>
  )
}