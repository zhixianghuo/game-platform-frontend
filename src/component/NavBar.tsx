import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="w-full border-b">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold">Game Platform</Link>

          <Link
            to="/app/tic-tac-toe"
            className="inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50"
          >
            Tic Tac Toe
          </Link>
      </div>
    </nav>
  )
}