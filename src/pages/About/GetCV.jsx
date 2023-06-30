import { File } from 'lucide-react'
import Paper from '../../components/Paper'

export default function GetCV() {
  return <Paper className="text-center items-center max-w-xl mx-auto">
    <h1>Looking for More Info?</h1>
    <p className="mb-4">If you are curious about my curriculum vitae, you can inspect it to get more about me!</p>
    <a target="_blank" rel="noreferrer" className="button w-fit mt-auto" href=""><File /> Go to CV</a>
  </Paper>
}
