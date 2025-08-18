import { useState } from 'react'
import { calculateWinner, isBoardFull, type Player } from './calculateWinner'

function Square({
  value,
  onClick,
  disabled,
}: {
  value: Player
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="h-20 w-20 aspect-square border text-3xl font-bold flex items-center justify-center hover:bg-gray-50 disabled:opacity-60"
    >
      {value ?? ' '}
    </button>
  )
}

export default function Game() {
  const [squares, setSquares] = useState<Player[]>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const winner = calculateWinner(squares)
  const draw = !winner && isBoardFull(squares)

  const status = winner ? `Winner: ${winner}` : draw ? 'Draw!' : `Next: ${xIsNext ? 'X' : 'O'}`

  function handleClick(i: number) {
    if (winner || squares[i]) return
    const next = squares.slice()
    next[i] = xIsNext ? 'X' : 'O'
    setSquares(next)
    setXIsNext(!xIsNext)
  }

  function reset() {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }

  return (
    <div className="space-y-4">
      <div className="text-lg font-semibold">{status}</div>

      <div className="grid grid-cols-3 gap-0 w-[15.5rem]">
        {squares.map((v, i) => (
          <Square
            key={i}
            value={v}
            onClick={() => handleClick(i)}
            disabled={!!winner}
          />
        ))}
      </div>

      <div className="space-x-2">
        <button
          onClick={reset}
          className="rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
