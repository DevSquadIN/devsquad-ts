import { Metadata } from "next"

import "../styles/globals.css"

export const metadata: Metadata = {
  title: "devsquad",
  description: "",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
