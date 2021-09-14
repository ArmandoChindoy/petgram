import { GlobalStyles } from './Styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from '@/pages/Home'
import { Router, Switch, Route } from 'react-router-dom'
import { createHashHistory } from 'history'
import { Detail } from '@/pages/Detail'
import { Favs } from '@/pages/Favs'
import { User } from '@/pages/User'
import { Navbar } from './components/Nabvar'

// const customHistory = createBrowserHistory()
const HashHistory = createHashHistory()
export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router history={HashHistory}>
        <Logo />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/pet/:id' component={Home} />
          <Route exact path='/detail/:id' component={Detail} />
          <Route exact path='/favs' component={Favs} />
          <Route exact path='/user' component={User} />
        </Switch>
        <Navbar />
      </Router>
    </>
  )
}
