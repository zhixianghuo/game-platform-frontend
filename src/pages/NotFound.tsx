import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold mb-2">页面不存在</h2>
      <Link to="/" className="text-blue-600 underline">回到首页</Link>
    </div>
  )
}