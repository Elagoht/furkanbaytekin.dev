import { createContext, useContext, useState } from 'react'

const Context = createContext()

export default function MenuContext({ children }) {

  const [menu, setMenu] = useState(false)

  return <Context.Provider value={{ menu, setMenu }}>
    {children}
  </Context.Provider>
}

export const useMenu = () => useContext(Context)