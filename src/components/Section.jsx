import { motion } from "framer-motion"

export default function Section({ children, className = "" }) {
  return <motion.section
    id="welcome"
    className={"px-8 " + className}
    initial={{ opacity: 0, transform: "translateY(-100px) scale(1.1)" }}
    animate={{ opacity: 1, transform: "translateY(0)  scale(1)" }}
    transition={{ duration: .5 }}
  >
    {children}
  </ motion.section>
}
