import React, { FC } from "react"
import Container from "./Container"

const Hero: FC<ParentComponent> = ({
  children
}) => {
  return <section className="prose dark:prose-invert prose-neutral py-12 max-w-none
  bg-fedora-50 dark:bg-fedora-950 text-fedora-950 dark:text-fedora-50"
  >
    <Container>
      {children}
    </Container>
  </section>
}

export default Hero