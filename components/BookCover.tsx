type BookCoverProps = {
  className?: string
  compact?: boolean
}

export default function BookCover({ className = "", compact = false }: BookCoverProps) {
  return (
    <div
      role="img"
      aria-label="Cover of Before You Automate It by Mac Ibale"
      className={`relative aspect-[2/3] overflow-hidden rounded-[1.35rem] border border-emerald-300/20 bg-[#07110d] text-white shadow-[0_28px_70px_rgba(0,0,0,0.35)] ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(2,187,101,0.24),transparent_32%),linear-gradient(145deg,transparent_0%,rgba(255,255,255,0.035)_48%,transparent_49%)]"
      />
      <div aria-hidden="true" className="absolute inset-y-0 left-[9%] w-px bg-emerald-300/20" />
      <div aria-hidden="true" className="absolute right-0 top-[11%] h-px w-[46%] bg-emerald-300/25" />

      <div className="relative flex h-full flex-col p-[10%]">
        <p className="max-w-[80%] text-[0.58rem] font-semibold uppercase leading-relaxed tracking-[0.25em] text-emerald-300 sm:text-[0.65rem]">
          A field guide for real-world automation
        </p>

        <h2 className={`mt-[10%] font-black leading-[0.92] tracking-[-0.055em] ${compact ? "text-[1.65rem]" : "text-[clamp(2rem,3.5vw,2.7rem)]"}`}>
          Before You
          <span className="block text-emerald-300">Automate It</span>
        </h2>

        <p className={`mt-[8%] max-w-[92%] leading-relaxed text-white/68 ${compact ? "text-[0.62rem]" : "text-[clamp(0.7rem,1.4vw,0.9rem)]"}`}>
          Find the hidden rules, exceptions, and spreadsheets that actually run the work.
        </p>

        <div aria-hidden="true" className="relative my-auto h-[22%] min-h-20">
          <div className="absolute left-0 top-[22%] h-[48%] w-[34%] rounded-md border border-white/15 bg-white/[0.045] p-[6%]">
            <div className="grid h-full grid-cols-3 gap-[8%]">
              {Array.from({ length: 9 }).map((_, index) => (
                <span key={index} className={index === 4 ? "rounded-sm bg-emerald-300/75" : "rounded-sm bg-white/16"} />
              ))}
            </div>
          </div>

          <div className="absolute left-[34%] top-1/2 h-px w-[33%] -translate-y-1/2 bg-emerald-300/60">
            <span className="absolute -right-1 -top-[3px] size-[7px] rotate-45 border-r border-t border-emerald-300" />
          </div>

          <div className="absolute right-0 top-[13%] w-[34%] rounded-md border border-emerald-300/40 bg-emerald-300/10 px-[5%] py-[8%]">
            <span className="block h-1 rounded-full bg-emerald-300/70" />
            <span className="mt-[12%] block h-1 w-4/5 rounded-full bg-white/25" />
            <span className="mt-[12%] block h-1 w-3/5 rounded-full bg-white/15" />
          </div>

          <div className="absolute bottom-0 left-[27%] rotate-[-4deg] rounded border border-amber-200/30 bg-amber-100/10 px-[5%] py-[3%] text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-amber-100/75">
            one exception
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-white/12 pt-[6%]">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/75">Mac Ibale</p>
          <div aria-hidden="true" className="flex gap-1">
            <span className="size-1.5 rounded-full bg-white/25" />
            <span className="size-1.5 rounded-full bg-emerald-300" />
          </div>
        </div>
      </div>
    </div>
  )
}
