import { hot } from 'react-hot-loader'
import { navigate, Link, Location, Redirect } from '@reach/router'

// UI components
import { Menu, Dropdown } from 'antd'
import BurgerMenu from 'react-burger-menu'

// Custom components
import Logo from './components/Logo'
import UserIcon from './components/UserIcon'
import Router from './components/TransitionRouter'

// Routes wrapped with react-loadable
import { Home, NotFound, Offer, Admin, Login } from './asyncPages'
import OffersAdmin from './pages/_admin/Offers'

// Resources
import logoImg from './img/logo.png'
import userImg from './img/user.png'

class App extends PureComponent {
  state = {
    loggedIn: true
  }

  render () {
    return (
      <>
        <Location>{this.getBurgerMenu}</Location>
        <Location>{this.getLogoAndUser(this.state.loggedIn)}</Location>
        <Router id='page'>
          <Home path='/' />
          <Offer path='/offer/:zone' />
          <Redirect
            path='/admin'
            to={this.state.loggedIn ? '/admin/home' : '/login'}
          />
          {this.state.loggedIn ? (
            <Admin path='/admin/:page' render={this.adminPage} />
          ) : (
            <Redirect path='/admin/:p' to='/login' />
          )}
          <Login path='/login' />
          <NotFound default />
        </Router>
      </>
    )
  }

  navigate = addr => e => {
    navigate(addr)
  }

  getLogoAndUser = loggedIn => ({ location }) => {
    if (/login|admin/.test(location.href)) return null
    return (
      <>
        <Logo src={logoImg} alt='Chomok Logo' onClick={this.navigate('/')} />
        <Dropdown
          path='/!login'
          overlay={this.getMenuItems(loggedIn)}
          trigger={['click']}>
          <UserIcon alt='User Icon' src={userImg} />
        </Dropdown>
      </>
    )
  }

  getMenuItems = loggedIn => (
    <Menu>
      {loggedIn ? (
        [
          <Menu.Item onClick={this.navigate('/admin')}>Settings</Menu.Item>,
          <Menu.Item onClick={this.navigate('/logout')}>Logout</Menu.Item>
        ]
      ) : (
        <Menu.Item onClick={this.navigate('/login')}>Login</Menu.Item>
      )}
    </Menu>
  )

  getBurgerMenu = ({ Location }) =>
    !/admin/.test(location.href) ? (
      <BurgerMenu.slide outerContainerId='root' pageWrapId='page'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/contact'>Contact Us</Link>
      </BurgerMenu.slide>
    ) : null

  adminPage = page => {
    if (page === 'home') return 'hi'
    if (page === 'offers') return <OffersAdmin />
  }
}

export default hot(module)(App)
