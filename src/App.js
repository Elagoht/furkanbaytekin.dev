import { useEffect } from "react";
import RouterManager from "./routes";

const App = () => {

  useEffect(() => {
    document.body.addEventListener("mousemove", (event) => {
      document.body.style.backgroundPositionX = event.clientX / 20 + "px"
      document.body.style.backgroundPositionY = event.clientY / 20 + "px"
    })
  }, [])

  return <RouterManager />
}
export default App;
