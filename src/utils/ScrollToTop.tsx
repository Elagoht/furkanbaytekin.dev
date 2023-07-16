import { FC, useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"
import { IChildrenComponent } from "../types";

const ScrollToTop: FC<IChildrenComponent> = ({ children }) => {

    const location = useLocation()

    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [location.pathname])

    return <>{children}</>
}

export default ScrollToTop