
import React from "react";

export function Note({ children }:{children: React.ReactNode}) {
  return (
    <aside className="my-6 rounded border-l-4 border-blue-500 bg-blue-500/10 p-4 text-foreground">
      {children}
    </aside>
  )
}
