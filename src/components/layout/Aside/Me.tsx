import dictionary from "@/lang"
import Image from "next/image"
import { FC } from "react"

const Me: FC = () => {
  return <section className="flex flex-col items-center">
    <figure id="me-avatar">
      <div id="flip-card-inner">
        <Image
          src="/assets/images/me.png"
          alt={dictionary.header.me.name}
          height={196}
          width={196}
        />

        <Image
          src="/assets/images/illustrated-me.png"
          alt={dictionary.header.me.name}
          id="flip-card-back"
          height={196}
          width={196}
        />
      </div>
    </figure>

    <strong className="mt-6 text-2xl">
      {dictionary.header.me.name}
    </strong>

    <span className="text-neutral-800 dark:text-neutral-200">
      {dictionary.header.me.title}
    </span>
  </section>
}

export default Me