import { motion } from "framer-motion"
import { FC } from "react"
import { IClassNameProps } from "../types"

const Section: FC<IClassNameProps> = ({ children, className = "", id }) => {

  const animation_reduced = window.matchMedia("(prefers-reduced-motion)").matches

  return <motion.section
    id={id}
    className={"px-8 " + className}
    initial={animation_reduced ? {} : { opacity: 0, transform: "translateY(-100px)" }}
    animate={animation_reduced ? {} : { opacity: 1, transform: "translateY(0)" }}
    transition={{ duration: .5 }}
  >
    {children}
  </ motion.section>
}

export default Section