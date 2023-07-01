import { File } from 'lucide-react'
import Paper from '../../components/Paper'

export default function GetCV() {
  return <Paper>
    <h1>Looking for More Info?</h1>
    <p className="mb-4">If you are curious about my curriculum vitae, you can inspect it to learn more about me!</p>
    <a target="_blank" rel="noreferrer" className="button w-fit mt-auto" href="https://mega.nz/file/fvRVRQyA#g2Zwla24rr_kq6SR6M-EZQRWageSC52hPSgjz1TRUZI"><File /> Go to CV</a>
  </Paper>
}
