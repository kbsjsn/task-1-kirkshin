export const makeBoard = (cells) => {
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