import { Inter } from "next/font/google"
import { Header } from "@/components/header"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import CustomCursor from "@/components/CustomCursor"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Analytics />
      <CustomCursor />
        <Header />
        {children}
      </body>
    </html>
  )
}

