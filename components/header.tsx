"use client"
import { useState, useEffect } from "react"
import { Phone } from "lucide-react"

const navItems = [
  { name: "iCity", id: "icity" },
  { name: "Aliva", id: "aliva" },
  { name: "Jirian", id: "jirian" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/98 backdrop-blur-lg shadow-sm border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <span className={`text-base font-black tracking-widest uppercase transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>Mountain View</span>
          <span className={`text-xs font-semibold tracking-widest transition-colors ${scrolled ? "text-primary" : "text-primary/80"}`}>DMG • SINCE 2005</span>
        </div>
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={(e) => scrollTo(e, item.id)}
              className={`text-sm font-semibold tracking-wide transition-colors ${scrolled ? "text-foreground/60 hover:text-foreground" : "text-white/70 hover:text-white"}`}>
              {item.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className={`hidden sm:flex flex-col items-end transition-colors`}>
            <span className={`text-xs ${scrolled ? "text-muted-foreground" : "text-white/50"}`}>Sales Team</span>
            <a href="tel:+201119770408" className={`text-sm font-black tracking-wide transition-colors ${scrolled ? "text-foreground" : "text-white"}`} dir="ltr">01119770408</a>
          </div>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) }}
            className="hidden sm:block bg-primary text-primary-foreground px-6 py-2.5 text-xs font-black tracking-widest uppercase hover:bg-primary/90 transition-colors">
            Book Now
          </a>
          <a href="tel:+201119770408" className="sm:hidden bg-primary text-primary-foreground p-2.5">
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  )
}
