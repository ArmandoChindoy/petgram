import React, { Suspense, useContext } from 'react'
import { GlobalStyles } from './Styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from '@/pages/Home'
import {
  Redirect, Router
} from '@reach/router'
import { Detail } from '@/pages/Detail'
import { User } from '@/pages/User'
import { Navbar } from '@/components/Nabvar'
import { Context } from '@/Context'
import { Login } from '@/pages/Login'
import { Register } from '@/pages/Register'
import { NotFound } from './pages/NotFound'

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <>
      <Suspense fallback={<div />}>
        <GlobalStyles />
        <Logo />
        <Router>
          <NotFound default />
          <Home path='/' />
          <Home path='/pet/:id' />
          <Detail path='/detail/:detailId' />
          {!isAuth && <Register path='/register' />}
          {!isAuth && <Login path='/login' />}
          {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
          {!isAuth && <Redirect noThrow from='/user' to='/login' />}
          {isAuth && <Redirect noThrow from='/login' to='/' />}
          <Favs path='/favs' />
          <User path='/user' />
        </Router>
        <Navbar />
      </Suspense>
    </>
  )
}
