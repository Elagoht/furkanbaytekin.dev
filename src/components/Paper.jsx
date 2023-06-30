import React from 'react'

export default function Paper({ children }) {
  return <article className="flex-1 flex flex-col gap-1">
    {children}
  </article>
}
