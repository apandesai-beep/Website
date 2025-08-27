import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Orbitron } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

const ethnocentric = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ethnocentric",
  weight: ["400", "700", "900"],
})

export const metadata: Metadata = {
  title: "Reakar Electric - Pioneering Electric Vehicle Innovation",
  description:
    "Revolutionary electric vehicle technology and sustainable transportation solutions. Leading the future of zero-emission mobility with cutting-edge EV development.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${ethnocentric.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
