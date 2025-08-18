import { Route, Routes } from "react-router-dom"
import NavBar from "./component/NavBar"
import HomePage from "./pages/HomePage"
import TicTacToePage from "./pages/TicTacToePage"
import NotFound from "./pages/NotFound"

export default function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app/tic-tac-toe" element={<TicTacToePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}