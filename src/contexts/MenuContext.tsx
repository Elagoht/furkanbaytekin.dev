import React, { FC, createContext, useContext, useState } from 'react'
import { IChildrenComponent } from '../types'

interface IMenuContext {
  menu: boolean
  setMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const Context = createContext<IMenuContext>({
  menu: false,
  setMenu: () => { }
})

const MenuContext: FC<IChildrenComponent> = ({ children }) => {

  const [menu, setMenu] = useState<boolean>(false)

  return <Context.Provider value={{ menu, setMenu }}>
    {children}
  </Context.Provider>
}

export default MenuContext

export const useMenu = () => useContext(Context)