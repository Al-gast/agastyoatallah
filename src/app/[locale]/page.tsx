import { notFound } from "next/navigation"

import { AboutSection } from "@/components/sections/home/about-section"
import { CapabilitiesPreview } from "@/components/sections/home/capabilities-preview"
import { ContactCta } from "@/components/sections/home/contact-cta"
import { ExperienceSection } from "@/components/sections/home/experience-section"
import { HomeHero } from "@/components/sections/home/home-hero"
import { LabPreview } from "@/components/sections/home/lab-preview"
import { SelectedWork } from "@/components/sections/home/selected-work"
import { isLocale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dictionary = await getDictionary(locale)

  return (
    <main>
      <HomeHero copy={dictionary.hero} />
      <SelectedWork locale={locale} copy={dictionary.work} />
      <LabPreview locale={locale} copy={dictionary.lab} />
      <CapabilitiesPreview copy={dictionary.capabilities} />
      <ExperienceSection locale={locale} copy={dictionary.experience} />
      <AboutSection copy={dictionary.about} />
      <ContactCta copy={dictionary} />
    </main>
  )
}
