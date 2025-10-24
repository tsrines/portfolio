import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Tim Rines - Portfolio",
  description: "Full-stack developer portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
