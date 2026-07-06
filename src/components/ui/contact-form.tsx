"use client"

import { useState } from "react"

import type { Dictionary } from "@/i18n/dictionaries"

type FormState = "idle" | "submitting" | "success" | "error"

export function ContactForm({ copy }: { copy: Dictionary["form"] }) {
  const [state, setState] = useState<FormState>("idle")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState("submitting")
    try {
      const response = await fetch("https://formspree.io/f/meqderqp", {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: { Accept: "application/json" },
      })
      if (!response.ok) throw new Error("Unable to send message")
      event.currentTarget.reset()
      setState("success")
    } catch {
      setState("error")
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          <span>{copy.name}</span>
          <input required name="name" autoComplete="name" placeholder={copy.namePlaceholder} />
        </label>
        <label>
          <span>{copy.email}</span>
          <input required name="email" type="email" autoComplete="email" placeholder={copy.emailPlaceholder} />
        </label>
      </div>
      <label>
        <span>{copy.message}</span>
        <textarea required name="message" rows={5} placeholder={copy.messagePlaceholder} />
      </label>
      <div className="form-submit-row">
        <button className="button button-primary" type="submit" disabled={state === "submitting"}>
          {state === "submitting" ? copy.sending : copy.send} <span aria-hidden="true">↗</span>
        </button>
        <p aria-live="polite">
          {state === "success" ? copy.success : null}
          {state === "error" ? copy.error : null}
        </p>
      </div>
    </form>
  )
}
