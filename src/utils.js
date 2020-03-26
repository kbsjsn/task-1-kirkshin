export const makeBoard = (cells, pieces) => {
  const board = [];
  let currPiece = 0;
  for (let i = 0; i < cells; i++) {
    const row = [];
    for (let j = 0; j < cells; j++) {
      if (pieces) {
        let piece = pieces[currPiece].length === 0 ? null : pieces[currPiece];
        row.push(piece)
        currPiece++;
      }
      else {
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
    }
    board.push(row)
  }
  return board
}