import { motion } from "framer-motion"

export default function Section({ children, className = "" }) {

  const animation_reduced = window.matchMedia("(prefers-reduced-motion)").matches

  return <motion.section
    id="welcome"
    className={"px-8 " + className}
    initial={animation_reduced ? {} : { opacity: 0, transform: "translateY(-100px)" }}
    animate={animation_reduced ? {} : { opacity: 1, transform: "translateY(0)" }}
    transition={{ duration: .5 }}
  >
    {children}
  </ motion.section>
}
