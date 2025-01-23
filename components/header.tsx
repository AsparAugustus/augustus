"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Send, MessageSquare } from "lucide-react"

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-muted"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center text-2xl font-bold text-secondary">
            <img src="/logos/augustus.png" alt="Augustus Logo" className="w-8 h-8 mr-2" />
            Augustus
            </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground/80 hover:text-secondary transition-colors">
              Home
            </Link>
            <Link href="/case-studies" className="text-foreground/80 hover:text-secondary transition-colors">
              Case Studies
            </Link>
            <Link href="/contact" className="text-foreground/80 hover:text-secondary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="https://telegram.org" className="text-foreground/80 hover:text-primary transition-colors">
              <Send className="w-5 h-5" />
            </Link>
            <Link href="https://discord.com" className="text-foreground/80 hover:text-primary transition-colors">
              <MessageSquare className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

