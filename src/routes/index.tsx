import Welcome from "../pages/Welcome";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Lessons from "../pages/Lessons";
import Contacts from "../pages/Contacts";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "../components/Header"
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from "../utils/ScrollToTop"
import { FC } from "react";

const RouterManager: FC = () => {

  return <BrowserRouter>
    <Header />
    <AnimatePresence mode="wait">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </ScrollToTop>
    </AnimatePresence>
  </BrowserRouter >
}

export default RouterManager