import { FC } from 'react'
import { IClassNameProps } from '../types'
import { motion } from 'framer-motion'
import { animPosition } from '../animations'

const Paper: FC<IClassNameProps> = ({ children, className = "" }) => {

  return <motion.article
    className={"flex-1 flex flex-col gap-1 " + className}
    variants={animPosition()}
  >
    {children}
  </motion.article>
}
export default Paper