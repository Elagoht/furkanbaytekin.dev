import React, { FC, useEffect } from "react";
import RouterManager from "./routes";

const App: FC = () => {

  useEffect(() => {
    document.body.addEventListener("mousemove", (event) => {
      if (!window.matchMedia("(prefers-reduced-motion)").matches) {
        document.body.style.backgroundPositionX = event.clientX / 30 + "px"
        document.body.style.backgroundPositionY = event.clientY / 30 + "px"
      }
    })
  }, [])

  return <RouterManager />
}
export default App