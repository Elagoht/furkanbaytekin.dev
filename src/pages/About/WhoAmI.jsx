import { Backpack, BadgePlus, CreativeCommons, Lightbulb, Quote } from "lucide-react"
import Paper from "../../components/Paper"
import { Link } from "react-router-dom"

const WhoAmI = () => {
  return <Paper title="Who Am I?">
    <h2>Who Am I?</h2>
    <p className="text-pink-600 max-[480px]:text-center"><Quote className="inline" />  Describe yourself in  3 words!</p>
    <p className="flex max-[480px]:justify-center gap-3 font-medium flex-wrap">
      <span className="text-green-800 dark:text-green-300"><BadgePlus className="inline" /> Productive </span>
      <span className="text-blue-800 dark:text-blue-300"><Lightbulb className="inline" /> Creative </span>
      <span className="text-red-800 dark:text-red-300"><CreativeCommons className="inline" /> Collaborative</span>
    </p>
    <p className="mb-4">
      Whenever I am interested in a subject, I create something about it,
      such as web and terminal apps, educational videos, designs, games,
      and more. The biggest examples of my work can be found on my <a
        className="text-red-800 dark:text-red-500"
        target="_blank" rel="noreferrer"
        href="https://youtube.com/@herkesicinlinux"
      >Youtube
      </a> channel, <a className="text-purple-800 dark:text-purple-500"
        target="_blank" rel="noreferrer"
        href="https://www.udemy.com/user/furkan-baytekin/"
      >Udemy</a> profile and  <a className="text-neutral-800 dark:text-neutral-500"
        target="_blank" rel="noreferrer"
        href="http://github.com/Elagoht"
      >Github</a> page.
    </p>
    <Link className="button w-fit mt-auto" to="/lessons"><Backpack />My Courses</Link>
  </Paper>
}

export default WhoAmI
