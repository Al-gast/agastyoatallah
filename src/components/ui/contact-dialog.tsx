"use client"

import type { MouseEvent } from "react"
import { useRef } from "react"

export function ContactDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null)

  function openDialog() {
    dialogRef.current?.showModal()
  }

  function closeDialog() {
    dialogRef.current?.close()
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    const dialog = event.currentTarget
    const bounds = dialog.getBoundingClientRect()
    const isInside =
      event.clientX >= bounds.left &&
      event.clientX <= bounds.right &&
      event.clientY >= bounds.top &&
      event.clientY <= bounds.bottom

    if (!isInside) {
      closeDialog()
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        className="inline-flex items-center gap-3 rounded-full bg-panel px-4 py-2 text-text opacity-90 transition hover:opacity-100 active:scale-95"
      >
        <svg
          width="16"
          height="16"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
        Contact Me
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="contact-dialog-title"
        onClick={handleBackdropClick}
        className="m-auto max-h-[calc(100vh-2rem)] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-3xl border border-accent/40 bg-page p-6 text-text shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={closeDialog}
          aria-label="Close contact form"
          className="absolute top-6 right-6 flex items-center gap-2 opacity-60 transition-opacity hover:opacity-100"
        >
          <span
            aria-hidden="true"
            className="hidden rounded bg-accent px-2 py-1 text-xs text-[#1e1e2e] sm:block"
          >
            esc
          </span>
          <svg
            width="24"
            height="24"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.41 4.29 19.71 2.88 18.3 9.17 12 2.88 5.7 4.29 4.29 10.59 10.59 16.89 4.29z" />
          </svg>
        </button>

        <h2 id="contact-dialog-title" className="pr-24 text-3xl font-black">
          Get In Touch
        </h2>
        <p className="mt-2 text-lg leading-8">
          Do you have an interesting job opportunity? Want to ask me a question?
          Or, just want to connect? Feel free to contact me.
        </p>

        <form action="https://formspree.io/f/meqderqp" method="POST">
          <div className="mt-6 flex flex-col gap-4 lg:flex-row">
            <div className="flex-1">
              <label htmlFor="contact-name" className="sr-only">
                Full Name
              </label>
              <input
                id="contact-name"
                required
                name="name"
                type="text"
                autoComplete="name"
                className="w-full rounded border border-accent/60 bg-panel p-3 text-lg text-text outline-none placeholder:text-text/50"
                placeholder="Full Name"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="contact-email" className="sr-only">
                Email
              </label>
              <input
                id="contact-email"
                required
                name="email"
                type="email"
                autoComplete="email"
                className="w-full rounded border border-accent/60 bg-panel p-3 text-lg text-text outline-none placeholder:text-text/50"
                placeholder="Email"
              />
            </div>
          </div>

          <label htmlFor="contact-message" className="sr-only">
            Message
          </label>
          <textarea
            id="contact-message"
            required
            name="message"
            className="mt-4 h-64 w-full resize-none rounded border border-accent/60 bg-panel p-3 text-lg text-text outline-none placeholder:text-text/50"
            placeholder="Message"
          />

          <button
            type="submit"
            className="mt-4 inline-flex items-center rounded-lg bg-action px-5 py-3 text-sm font-semibold text-white opacity-90 transition hover:opacity-100 active:scale-95"
          >
            Send
          </button>
        </form>
      </dialog>
    </>
  )
}
