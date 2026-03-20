import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="z-30 w-full border-b border-foreground/10 sticky top-0 bg-background/80 backdrop-blur">
      
      <div className="max-w-3xl mx-auto flex items-center justify-between h-15 px-3">
        <span className="font-bold">Mac</span>

        <div className="space-x-4 flex items-center">
          <a href="/" className="text-sm">Home</a>
          <a href="/blog" className="text-sm">Blog</a>
          <ThemeToggle />
        </div>
      </div>

    </nav>
  )
}