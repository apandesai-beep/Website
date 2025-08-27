"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-primary via-primary to-accent/20 text-primary-foreground shadow-lg backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                src="/reakar-electric-logo.png"
                alt="Reakar Electric Logo"
                width={40}
                height={40}
                className="glow-effect rounded-lg"
              />
            </div>
            <span className="text-2xl font-bold font-ethnocentric neon-text">REAKAR ELECTRIC</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-accent transition-all duration-300 hover-glow px-3 py-1 rounded">
              Services
            </a>
            <a href="#about" className="hover:text-accent transition-all duration-300 hover-glow px-3 py-1 rounded">
              About
            </a>
            <a href="#founders" className="hover:text-accent transition-all duration-300 hover-glow px-3 py-1 rounded">
              Team
            </a>
            <a href="#contact" className="hover:text-accent transition-all duration-300 hover-glow px-3 py-1 rounded">
              Contact
            </a>
            <Button
              variant="secondary"
              className="ml-4 hover-glow bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden hover-glow p-2 rounded" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20">
            <div className="flex flex-col gap-4 pt-4">
              <a href="#services" className="hover:text-accent transition-colors">
                Services
              </a>
              <a href="#about" className="hover:text-accent transition-colors">
                About
              </a>
              <a href="#founders" className="hover:text-accent transition-colors">
                Team
              </a>
              <a href="#contact" className="hover:text-accent transition-colors">
                Contact
              </a>
              <Button variant="secondary" className="w-fit bg-accent hover:bg-accent/90 text-accent-foreground">
                Get Quote
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
