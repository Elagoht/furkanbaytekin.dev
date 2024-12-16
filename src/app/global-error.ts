"use client"

import { useRouter } from "next/navigation"
import { FC, useEffect } from "react"

const GlobalErrorBoundary: FC = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/")
  }, [router])

  return null
}

export default GlobalErrorBoundary