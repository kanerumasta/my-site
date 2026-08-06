import Link from "next/link"

export default function NotFound() {
  return <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col justify-center px-6 py-20"><p className="text-sm font-medium text-primary">404</p><h1 className="mt-3 text-4xl font-bold">This page wandered off.</h1><p className="mt-4 text-foreground/60">The link may be old, or the page may have moved.</p><Link href="/" className="mt-7 w-fit rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Back home</Link></main>
}
