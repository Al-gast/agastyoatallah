"use client"

import Link from "next/link"
import { useParams } from "next/navigation"

export default function ProjectNotFound() {
  const params = useParams<{ locale?: string }>()
  const locale = params?.locale === "id" ? "id" : "en"
  const copy =
    locale === "id"
      ? {
          eyebrow: "404 / Proyek tidak ditemukan",
          heading: "Studi kasus ini tidak ada di dalam arsip.",
          action: "Kembali ke karya pilihan",
        }
      : {
          eyebrow: "404 / Project not found",
          heading: "This case study isn't in the archive.",
          action: "Return to selected work",
        }

  return (
    <main className="not-found page-gutter">
      <p className="eyebrow">{copy.eyebrow}</p>
      <h1>{copy.heading}</h1>
      <Link href={"/" + locale + "#work"} className="button button-primary">
        {copy.action}
      </Link>
    </main>
  )
}
