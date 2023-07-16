import { FC } from "react"
import { IChildrenComponent } from "../types"
import { motion } from "framer-motion"
import { animPosition } from "../animations"

interface ShowCaseProps extends IChildrenComponent {
  img: string
}

const ShowCase: FC<ShowCaseProps> = ({ img, children }) => {

  return <motion.div
    className="content-container"
    variants={animPosition}
  >
    <img className="w-1/2 max-md:w-full object-contain" src={img} alt="Laptop Mockup" />
    <div className="w-1/2 max-md:w-full max-md:pb-16 flex flex-col gap-4 justify-center">
      {children}
    </div>
  </motion.div>
}
export default ShowCase