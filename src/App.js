import { GlobalStyles } from './Styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from '@/pages/Home'
import { Router } from '@reach/router'
import { Detail } from '@/pages/Detail'
import { Favs } from '@/pages/Favs'
import { User } from '@/pages/User'
import { Navbar } from '@/components/Nabvar'
import Context from '@/Context'
import { NotRegisterUser } from '@/pages/NotRegisterUser'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth
            ? <Router>
              <Favs path='/favs' />
              <User path='/user' />
            </Router>
            : <Router>
              <NotRegisterUser path='/favs' />
              <NotRegisterUser path='/user' />
            </Router>}
      </Context.Consumer>
      <Navbar />
    </>
  )
}
