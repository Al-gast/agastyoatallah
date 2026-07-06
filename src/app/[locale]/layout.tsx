import type { Metadata } from "next"
import type { ReactNode } from "react"
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google"
import { notFound } from "next/navigation"

import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { WebGLSceneShell } from "@/components/webgl/webgl-scene-shell"
import { isLocale, locales } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"

import "../globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dictionary = await getDictionary(locale)
  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    ),
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    icons: { icon: "/favicon.ico" },
    alternates: {
      canonical: "/" + locale,
      languages: { en: "/en", id: "/id" },
    },
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      locale: locale === "id" ? "id_ID" : "en_US",
      alternateLocale: locale === "id" ? ["en_US"] : ["id_ID"],
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dictionary = await getDictionary(locale)
  const themeScript =
    "(function(){try{var saved=localStorage.getItem('portfolio-theme');var theme=saved||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme}catch(e){document.documentElement.dataset.theme='dark'}})()"

  return (
    <html lang={locale} data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={spaceGrotesk.variable + " " + ibmPlexMono.variable}>
        <ThemeProvider>
          <WebGLSceneShell />
          <ScrollProgress />
          <CustomCursor viewLabel={dictionary.cursor.view} />
          <div className="site-frame">
            <Header
              locale={locale}
              copy={{
                nav: dictionary.nav,
                language: dictionary.language,
                theme: dictionary.theme,
              }}
            />
            <div className="site-content">{children}</div>
            <Footer copy={dictionary.footer} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
