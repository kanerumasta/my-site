// /components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="flex mb-4 justify-between p-4 sticky top-0 bg-[#0a0a0a]" >
      <span className="font-bold">Mac</span>

      <div className="space-x-4">
        <a href="/" className="text-sm">Home</a>
        <a href="/blog" className="text-sm">Blog</a>
      </div>
    </nav>
  )
}