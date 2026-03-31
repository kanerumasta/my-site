
import React from "react";

export function Note({ children }:{children: React.ReactNode}) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded">
      {children}
    </div>
  )
}