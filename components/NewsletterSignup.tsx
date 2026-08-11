export default function NewsletterSignup() {
  return (
    <section
      className="rounded-2xl border border-primary/25 bg-primary/[0.06] p-7 sm:p-8"
      aria-labelledby="newsletter-heading"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        Notes from the workbench
      </p>
      <h2 id="newsletter-heading" className="mt-2 text-2xl font-bold tracking-tight">
        Useful ideas, delivered occasionally.
      </h2>
      <p className="mt-3 max-w-xl leading-relaxed text-foreground/65">
        Get practical notes about software engineering, AI, and lessons from real projects. No spam,
        just the things worth sharing.
      </p>

      <form
        action="https://buttondown.com/api/emails/embed-subscribe/mac_ibale"
        method="post"
        className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          className="min-w-0 flex-1 rounded-lg border border-foreground/20 bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/40"
        />
        <button
          type="submit"
          className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Subscribe
        </button>
      </form>

      <p className="mt-3 text-xs text-foreground/45">
        Unsubscribe anytime. Powered by{' '}
        <a
          href="https://buttondown.com/refer/mac_ibale"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          Buttondown
        </a>
        .
      </p>
    </section>
  )
}
