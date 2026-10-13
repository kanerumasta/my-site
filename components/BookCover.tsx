import Image from "next/image"

type BookCoverProps = {
  className?: string
  compact?: boolean
}

export default function BookCover({ className = "", compact = false }: BookCoverProps) {
  return (
    <div className={`overflow-hidden rounded-lg shadow-[0_28px_70px_rgba(0,0,0,0.35)] ${className}`}>
      <Image
        src="/images/books/before-you-automate-it-cover.png"
        alt="Cover of Before You Automate It by Mac Ibale"
        width={1024}
        height={1536}
        sizes={compact ? "(max-width: 768px) 208px, 208px" : "(max-width: 768px) 80vw, 320px"}
        className="h-auto w-full"
      />
    </div>
  )
}
