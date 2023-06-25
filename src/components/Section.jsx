import { motion } from "framer-motion"

export default function Section({ children, className = "" }) {
  return <motion.section
    id="welcome"
    className={"px-8 " + className}
    initial={{ opacity: 0, scale: 1.1, translateY: Math.random() * 100 }}
    animate={{ opacity: 1, scale: 1, translateY: 0 }}
    transition={{ duration: .5 }}
  >
    {children}
  </ motion.section>
}
