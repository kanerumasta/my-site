import { Note } from "@/components/Note"
import { BlogImage } from "@/components/BlogImage"
import { Terminal } from "@/components/Terminal"
import { Callout } from "@/components/Callout"
import { LinkPreview } from "@/components/LinkPreview"

export function useMDXComponents(components: any) {
  return {
    ...components,
    Note,
    BlogImage,
    Terminal,
    Callout,
    LinkPreview,
  }
}