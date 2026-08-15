'use client'

import { Check, Copy, Facebook, Linkedin, Share2 } from 'lucide-react'
import { useState } from 'react'

export default function ShareArticle({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false)
  const encodedUrl = encodeURIComponent(url)

  async function copyLink() {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  async function share() {
    if (navigator.share) await navigator.share({ title, url }).catch(() => undefined)
    else await copyLink()
  }

  const style = 'inline-flex items-center gap-2 rounded-lg border border-foreground/15 px-3.5 py-2 text-sm font-medium text-foreground/65 transition hover:border-primary/40 hover:text-foreground'

  return <section className="mt-12 border-y border-foreground/10 py-6" aria-labelledby="share-heading">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div><h2 id="share-heading" className="font-semibold">Worth sharing?</h2><p className="mt-1 text-sm text-foreground/55">Send it to someone who might find it useful.</p></div>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={share} className={style}><Share2 size={16} /> Share</button>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className={style}><Linkedin size={16} /> LinkedIn</a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className={style}><Facebook size={16} /> Facebook</a>
        <button type="button" onClick={copyLink} className={style}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? 'Copied' : 'Copy link'}</button>
      </div>
    </div>
  </section>
}
