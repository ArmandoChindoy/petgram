import { createContext, useState } from 'react'
export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() =>
    window.sessionStorage.getItem('token')
  )
  const value = {
    isAuth,
    activateAuth: (token) => {
      window.sessionStorage.setItem('token', token)
      setIsAuth(() => window.sessionStorage.getItem('token'))
      console.log('auth', isAuth)
    },
    removeAuth: () => {
      window.sessionStorage.removeItem('token')
      setIsAuth(false)
      console.log('auth', isAuth)
    }
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}
export default {
  Provider,
  Consumer: Context.Consumer
}
