import { Github, Linkedin } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="z-30 w-full border-b border-foreground/10 sticky top-0 bg-background/80 backdrop-blur">
      
      <div className="max-w-3xl mx-auto flex items-center justify-between h-15 px-3">
        <a href="/" className="font-bold">Mac</a>

        <div className="space-x-1 flex items-center">
      
          <a  href="/blog" className="text-sm mr-4">Blog</a>

          <a href="https://github.com/kanerumasta" target="_blank" 
  rel="noopener noreferrer" className="text-sm">
          <div className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition">
          <Github size={18}/>
          </div>
          </a>
          <a href="https://www.linkedin.com/in/kanerumasta/" target="_blank" 
  rel="noopener noreferrer" className="text-sm">
          <div className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition">
          <Linkedin size={18}/>
          </div>
          </a>
          <ThemeToggle />
          </div>
      </div>

    </nav>
  )
}