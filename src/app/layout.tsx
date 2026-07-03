import type { Metadata } from "next"
import type { ReactNode } from "react"

import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { CustomCursor } from "@/components/ui/custom-cursor"

import "./globals.css"

const title = "Agastyo Atallah | Software Engineer"
const description =
  "Personal portfolio website for Agastyo Atallah, a software engineer based in Bandung, Indonesia."

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title,
    description,
  },
}

type RootLayoutProps = Readonly<{
  children: ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
