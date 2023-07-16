
const animationContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
}

const animationPosition = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut"
    }
  }
}

export const animPosition = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return {}
  return animationPosition
}

export const animContainer = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return {}
  return animationContainer
}