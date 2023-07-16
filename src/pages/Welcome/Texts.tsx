import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FC } from 'react'
import { Link } from "react-router-dom"
import { animContainer, animPosition } from '../../animations'

const Texts: FC = () => {

  return <motion.div
    className="flex flex-col gap-4 max-lg:text-center"
    initial="hidden"
    animate="visible"
    variants={animContainer()}
  >
    <motion.div
      variants={animPosition()}
      className="text-6xl font-title"
    >
      Hi! I am
      <br />
      Furkan Baytekin.
    </motion.div>
    <motion.h2
      variants={animPosition()}
    >
      Software Developer, Instructor.
    </motion.h2>
    <motion.p
      variants={animPosition()}
      className="max-w-lg text-lg text-neutral-600 dark:text-neutral-400"
    >
      Since 2012, I have designed, coded, and developed
      websites; web, desktop, and terminal applications.
      I also record educational Linux videos and share
      them on YouTube and Udemy.
    </motion.p>

    <motion.p
      variants={animPosition()}
      className="text-lg flex gap-2 items-center max-lg:justify-center max-lg:mt-auto"
    >
      <Link className='button' to="about">See more <ArrowRight className="inline" strokeWidth={1.5} /></Link>
    </motion.p>
  </motion.div>
}

export default Texts