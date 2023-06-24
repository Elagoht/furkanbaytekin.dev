import { ArrowDown } from 'lucide-react'
import React from 'react'

export default function Texts() {
  return <div className="flex flex-col gap-4 max-lg:text-center">
    <h1 className="text-6xl font-title">
      Hi! I am
      <br />
      Furkan Baytekin
    </h1>
    <h2 className="text-3xl">Software Developer, Instructor.</h2>
    <p className="max-w-lg text-lg">
      Since 2012, I design, code, and develop web sites,
      web and desktop applications. Also I record
      educational Linux videos, share on Youtube and
      Udemy.
    </p>
    <p className="text-lg flex gap-2 items-center max-lg:justify-center max-lg:mt-auto">
      <a href="#about">See more <ArrowDown className="inline" strokeWidth={1.5} /></a>
    </p>
  </div >
}
