"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header({ isScrolled }: { isScrolled: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-muted" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-7 sm:w-8 h-7 sm:h-8 bg-accent rounded-sm flex items-center justify-center flex-shrink-0">
            <span className="text-accent-foreground font-serif font-bold text-sm sm:text-lg">{"I"}</span>
          </div>
          <span className="font-serif font-bold text-xs sm:text-sm md:text-lg text-foreground hidden xs:inline line-clamp-2">
            {"Fitout Concepts"}{" "}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground hover:text-accent transition-colors duration-300 text-sm font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Contact Info & Mobile Menu */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <div className="hidden lg:flex flex-col items-end text-xs">
            <a href="mailto:info@alabbar.com" className="text-foreground hover:text-accent transition-colors">
              {"youremailhere@gmail.com"}
            </a>
            <a href="tel:+97144445566" className="text-foreground hover:text-accent transition-colors">
              +1 111 111111   
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-accent transition-colors p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-muted">
          <nav className="container mx-auto px-3 sm:px-4 py-3 flex flex-col gap-3">
            {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground hover:text-accent transition-colors py-2 px-2 rounded hover:bg-secondary/50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="border-t border-muted pt-3 mt-3">
              <a
                href="mailto:info@alabbar.com"
                className="block text-foreground hover:text-accent transition-colors py-2 px-2 rounded hover:bg-secondary/50"
              >
                {"youremailhere@gmail.com"}
              </a>
              <a
                href="tel:+97144445566"
                className="block text-foreground hover:text-accent transition-colors py-2 px-2 rounded hover:bg-secondary/50"
              >
                {"+1 111 111111"}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
