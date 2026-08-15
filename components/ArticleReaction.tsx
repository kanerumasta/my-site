'use client'

import { useSyncExternalStore } from 'react'

const reactions = [{ id: 'useful', emoji: '💡', label: 'Useful' }, { id: 'relatable', emoji: '🙋', label: 'Relatable' }, { id: 'funny', emoji: '😄', label: 'Made me laugh' }] as const

export default function ArticleReaction({ slug }: { slug: string }) {
  const storageKey = `article-reaction:${slug}`
  const selected = useSyncExternalStore(
    (onChange) => {
      window.addEventListener('storage', onChange)
      window.addEventListener('article-reaction-change', onChange)
      return () => {
        window.removeEventListener('storage', onChange)
        window.removeEventListener('article-reaction-change', onChange)
      }
    },
    () => window.localStorage.getItem(storageKey),
    () => null,
  )

  function react(id: string) {
    const next = selected === id ? null : id
    if (next) window.localStorage.setItem(storageKey, next)
    else window.localStorage.removeItem(storageKey)
    window.dispatchEvent(new Event('article-reaction-change'))
  }

  return <section className="mt-10 rounded-2xl border border-foreground/10 bg-foreground/[0.025] p-6 text-center" aria-labelledby="reaction-heading">
    <h2 id="reaction-heading" className="font-semibold">How did this land?</h2>
    <p className="mt-1 text-sm text-foreground/50">A tiny signal is enough—no account needed.</p>
    <div className="mt-4 flex flex-wrap justify-center gap-2">{reactions.map(({ id, emoji, label }) => <button key={id} type="button" aria-pressed={selected === id} onClick={() => react(id)} className={`rounded-full border px-4 py-2 text-sm transition ${selected === id ? 'border-primary bg-primary/10 text-primary' : 'border-foreground/15 hover:border-primary/40'}`}><span aria-hidden="true">{emoji}</span> {label}</button>)}</div>
  </section>
}
