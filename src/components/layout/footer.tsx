import Image from "next/image"

import { ContactDialog } from "@/components/ui/contact-dialog"

const catppuccinFooter =
  "https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true"

export function Footer() {
  return (
    <footer className="mt-12 px-4 pb-12">
      <div className="mx-auto flex max-w-3xl justify-center" aria-hidden="true">
        <Image
          src={catppuccinFooter}
          alt=""
          width={500}
          height={80}
          unoptimized
          className="h-auto max-w-full"
        />
      </div>
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 text-text">
        <p className="text-sm opacity-50">© Agastyo Atallah A, 2024</p>
        <ContactDialog />
      </div>
    </footer>
  )
}
