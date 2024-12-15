import Dictate from "@/utilities/Dictionary"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const HeaderLogo: FC = () => {
  const dictionary = Dictate.en

  return <Link href="/">
    <figure className="flex items-center gap-2">
      <Image
        src="/assets/images/me.png"
        alt="Amblem"
        width={64}
        height={64}
        className="rounded-full"
      />

      <figcaption className="text-center text-xl lg:text-2xl py-4 max-md:hidden">
        {dictionary.metadata.title}
      </figcaption>
    </figure>
  </Link>
}

export default HeaderLogo