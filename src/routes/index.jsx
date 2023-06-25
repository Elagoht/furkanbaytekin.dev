import Welcome from "../pages/Welcome";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Lessons from "../pages/Lessons";
import Contacts from "../pages/Contacts";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "../components/Header"

export default function RouterManager() {
  return <BrowserRouter>
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  </BrowserRouter>
}
