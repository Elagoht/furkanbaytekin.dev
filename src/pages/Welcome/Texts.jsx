import { ArrowRight } from 'lucide-react'
import { Link } from "react-router-dom"

export default function Texts() {
  return <div className="flex flex-col gap-4 max-lg:text-center">
    <h1 className="text-6xl font-title">
      Hi! I am
      <br />
      Furkan Baytekin.
    </h1>
    <h2 className="text-orange-500 text-3xl">Software Developer, Instructor.</h2>
    <p className="max-w-lg text-lg text-neutral-600 dark:text-neutral-400">
      Since 2012, I design, code, and develop websites,
      web, desktop, and terminal applications. I also
      record educational Linux videos and share them on YouTube
      and Udemy.
    </p>

    <p className="text-lg flex gap-2 items-center max-lg:justify-center max-lg:mt-auto">
      <Link className='button' to="about">See more <ArrowRight className="inline" strokeWidth={1.5} /></Link>
    </p>
  </div >
}
