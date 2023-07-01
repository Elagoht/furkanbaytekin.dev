import { Link } from "react-router-dom"
import Paper from "../../components/Paper"
import { FileCode2 } from "lucide-react"

const WhatIDo = () => {
  return <Paper title="What I Do?">
    <h2>What I Do?</h2>
    <p>I code, design, edit, teach and learn.</p>
    <p>I am familiar with
      <span className="text-orange-800 dark:text-orange-500"> HTML</span>,
      <span className="text-blue-800 dark:text-blue-500"> CSS</span>,
      <span className="text-yellow-800 dark:text-yellow-500"> Javascript</span>,
      <span className="text-sky-800 dark:text-sky-500"> Python</span>,
      <span className="text-purple-800 dark:text-purple-500"> C#</span>,
      <span className="text-green-800 dark:text-green-500"> Shell Script</span> & <a
        target="_blank" rel="noreferrer"
        className="cursor-help text-gray-800 dark:text-gray-500"
        href="https://en.wikipedia.org/wiki/AWK"
      >
        <span>AWK</span>
      </a>.
    </p>
    <p className="mb-4">
      My journey began in 2012. I have designed websites,
      produced educational videos and courses,
      written blogs and resources, and developed games.
    </p>
    <Link className="button w-fit mt-auto" to="/portfolio"><FileCode2 />Notable Projects</Link>
  </Paper>
}

export default WhatIDo
