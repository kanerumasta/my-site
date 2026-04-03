
import React from "react";

export function Note({ children }:{children: React.ReactNode}) {
  return (
    <div className="bg-foreground/5 border-l-4 border-blue-500 p-4 my-6 text-black! rounded">
      {children}
    </div>
  )
}