import NavBarItem from './NavBarItem'

export default function NavBar() {
  return <nav id="nav-header" className="max-md:flex-col w-full">
    <NavBarItem url={"about"}>About</NavBarItem>
    <NavBarItem url={"portfolio"}>Portfolio</NavBarItem>
    <NavBarItem url={"lessons"}>Lessons</NavBarItem>
    <NavBarItem url={"contacts"}>Contacts</NavBarItem>
  </nav>
}
