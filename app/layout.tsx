import { Inter } from "next/font/google"
import { Header } from "@/components/header"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import CustomCursor from "@/components/CustomCursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Augustus",
  description: "Augustus | Memes marketing made easy",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  keywords: ["Augustus", "marketing", "agency", "memes", "crypto"],
  author: "Merlin",
}

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

