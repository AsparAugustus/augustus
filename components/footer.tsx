import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t border-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-secondary flex items-center">
            <img src="/logos/augustus.png" alt="Augustus Logo" className="h-8 w-auto mr-2" />
            Augustus
          </Link>

          {/* Navigation */}
          <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
          
            <Link href="/support" className="text-sm text-foreground/80 hover:text-secondary transition-colors">
              SUPPORT
            </Link>
            <Link href="/privacy" className="text-sm text-foreground/80 hover:text-secondary transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="/terms" className="text-sm text-foreground/80 hover:text-secondary transition-colors">
              TERMS & CONDITIONS
            </Link>
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-muted">
        <div className="container mx-auto px-4 py-4">
          <p className="text-sm text-foreground/60 text-center">COPYRIGHT © AUGUSTUS {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

