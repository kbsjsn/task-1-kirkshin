import React from 'react';
import './Input.css';
import { makeBoard } from '../utils';

const saveGame = (board, cells) => {
  window.localStorage.setItem('myGameBoard', board)
  window.localStorage.setItem('myGameCells', cells)
}

export default function Input ({ cells, board, setCells, setPieceColor, setPieceShape, setBoard }) {

  return (
    <div className="inputbar">
      <input onChange={e => setCells(e.target.value)} className="textfield"/>
      <div>
        <b>Top Piece Color:</b>
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
        <b>Shape:</b>
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
      <button onClick={() => saveGame(board, cells)}>Save Game</button>
      <button onClick={() => { 
            window.localStorage.removeItem('myGameBoard', board)
            window.localStorage.removeItem('myGameCells', cells)
            setBoard(makeBoard(cells))  
          }
        }
      >Reset Game</button>
    </div>
  )
}