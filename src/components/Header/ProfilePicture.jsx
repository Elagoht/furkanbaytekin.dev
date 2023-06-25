import { Link } from "react-router-dom";

export default function ProfilePicture() {
  return <Link
    to="/"
    className="flex items-center gap-4 font-title"
  >
    <div id="profile-picture"></div>
    <div className="text-3xl text-center text-neutral-200">Furkan Baytekin</div>
  </Link>
}
