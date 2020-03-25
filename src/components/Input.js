import React from 'react';

export default function Input ({ setCells }) {

  return (
    <div className="inputbar">
      <input onChange={e => setCells(e.target.value)} />
    </div>
  )
}