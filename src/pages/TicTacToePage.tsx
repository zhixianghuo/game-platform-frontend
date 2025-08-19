import TicTacToeGame from '../games/tic-tac-toe/TicTacToeGame'

export default function TicTacToePage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Tic Tac Toe</h1>
      <TicTacToeGame />
    </section>
  )
}