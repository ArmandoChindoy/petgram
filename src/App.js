import React, { Suspense, useContext } from 'react'
import { GlobalStyles } from './Styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from '@/pages/Home'
import {
  Redirect, Router,
  createMemorySource,
  createHistory
} from '@reach/router'
import { Detail } from '@/pages/Detail'
import { User } from '@/pages/User'
import { Navbar } from '@/components/Nabvar'
import { Context } from '@/Context'
import { Login } from '@/pages/Login'
import { Register } from '@/pages/Register'
import { NotFound } from './pages/NotFound'

const Favs = React.lazy(() => import('./pages/Favs'))

// for some types of tests you want a memory source
const source = createMemorySource('/petgram')
const history = createHistory(source)

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <>
      <Suspense fallback={<div />}>
        <GlobalStyles />
        <Logo />
        <Router history={history}>
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
