import NavBar from './NavBar'
import ProfilePicture from './ProfilePicture'
import SocialBar from './SocialBar'

export default function Header() {
  return <header>
    <div className="container px-2 flex justify-between items-center">
      <ProfilePicture />
      <div className="flex">
        <NavBar />
        <SocialBar />
      </div>
    </div>
  </header>
}
