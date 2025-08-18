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
  //使用 useState 来管理游戏状态
  //squares 存储每个格子的状态，初始值为 null
  //xIsNext 用来判断下一个玩家是 X 还是 O
  //使用 useState 来创建 squares 和 xIsNext 的状态
  const [squares, setSquares] = useState<Player[]>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  //派生状态：由当前的 squares 状态计算出游戏的赢家和是否平局，不单独储存
  //避免“状态不同步”的 bug
  //React 每次渲染时会重新执行函数（不等于重复挂载），因此 winner 总保持最新
  const winner = calculateWinner(squares)
  const draw = !winner && isBoardFull(squares)

  const status = winner ? `Winner: ${winner}` : draw ? 'Draw!' : `Next: ${xIsNext ? 'X' : 'O'}`

  function handleClick(i: number) {
    if (winner || squares[i]) return
    //不直接修改 squares, 而是创建一个新的数组
    //这是 React 的最佳实践，确保状态更新正确
    //使用 slice() 方法创建 squares 的副本
    //然后在副本上进行修改
    //最后使用 setSquares 更新状态
    //这样可以避免直接修改状态，确保 React 能正确识别状态变化
    //并触发重新渲染
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
