"use client"

import Message from "@/utilities/Message"
import { useRouter } from "next/navigation"
import { FC, useEffect, useState } from "react"

type CountdownProps = {
  to: string
  message: string
  duration?: number
  modifierKey?: string
}

const Countdown: FC<CountdownProps> = ({
  to = "/", message, duration = 5, modifierKey = "seconds"
}) => {
  const router = useRouter()

  const [count, setCount] = useState<number>(duration)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count === 0) return router.push(to)

      setCount(count - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [count, router, to])

  return <span dangerouslySetInnerHTML={{
    __html: Message.format(message, { [modifierKey]: count })
  }} />
}

export default Countdown