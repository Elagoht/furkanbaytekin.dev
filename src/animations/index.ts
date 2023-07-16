const prefersReducedMotionQuery = !window.matchMedia("(prefers-reduced-motion: reduce)")

export const animContainer = {
  hidden: {
    opacity: 0,
  },
  visible: prefersReducedMotionQuery
    ? { opacity: 1, }
    : {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
}

export const animPosition = {
  hidden: prefersReducedMotionQuery
    ? { opacity: 0 }
    : {
      x: -100,
      opacity: 0
    },
  visible: prefersReducedMotionQuery
    ? { opacity: 1 }
    : {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeOut"
      }
    },
}