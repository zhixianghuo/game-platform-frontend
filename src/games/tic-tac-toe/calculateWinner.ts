export type Player = 'X' | 'O' | null

export function calculateWinner(squares: Player[]): Player {
  const lines = [
    [0,1,2], [3,4,5], [6,7,8],      // rows
    [0,3,6], [1,4,7], [2,5,8],      // cols
    [0,4,8], [2,4,6],               // diags
  ]
  for (const [a,b,c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export function isBoardFull(squares: Player[]): boolean {
  return squares.every(Boolean)
}
