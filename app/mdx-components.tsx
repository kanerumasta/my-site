import { Note } from "@/components/Note"

export function useMDXComponents(components: any) {
  return {
    ...components,
    Note,
  }
}