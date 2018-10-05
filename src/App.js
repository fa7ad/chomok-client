import React from 'react'
import { navigate, Link, Location, Redirect } from '@reach/router'

// UI components
import { Menu, Dropdown } from 'antd'
import BurgerMenu from 'react-burger-menu/lib/menus/slide'

// Custom components
import Logo from './components/Logo'
import loading from './components/Loading'
import UserIcon from './components/UserIcon'
import Router from './components/TransitionRouter'

// Routes wrapped with react-loadable
import Loadable from 'react-loadable'

// Resources
import logoImg from './img/logo.png'
import userImg from './img/user.png'

const Home = Loadable.Map({
  loading,
  loader: {
    Home: () => import('./pages/Home'),
    navItems: () => fetch('/api/zones/').then(r => r.json())
  },
  render (loaded, props) {
    const Home = loaded.Home.default
    const navItems = loaded.navItems.data
    return <Home {...props} navItems={navItems} />
  }
})

const Offer = Loadable({
  loading,
  loader: _ => import('./pages/Offer')
})

const NotFound = Loadable({
  loading,
  loader: _ => import('./pages/NotFound')
})

const Admin = Loadable({
  loading,
  loader: _ => import('./pages/Admin')
})

const Login = Loadable({
  loading,
  loader: _ => import('./pages/Login')
})

const OffersAdmin = Loadable({
  loading,
  loader: _ => import('./pages/_admin/Offers')
})
const AddOfferAdmin = Loadable({
  loading,
  loader: _ => import('./pages/_admin/AddOffer')
})
const ZonesAdmin = Loadable({
  loading,
  loader: _ => import('./pages/_admin/Zones')
})

class App extends React.PureComponent {
  logout = e => {
    fetch('/api/logout', { credentials: 'include' })
      .then(r => r.json())
      .then(({ ok }) => {
        setTimeout(this.getLoginState, 1000)
        if (ok) navigate('/')
      })
      .catch(e => console.error(e))
  }

  navigate = addr => e => {
    navigate(addr)
  }

  menu = [
    <Menu.Item key='0' onClick={this.navigate('/login')}>
      Login
    </Menu.Item>,
    <Menu.Item key='1' onClick={this.navigate('/admin')}>
      Settings
    </Menu.Item>,
    <Menu.Item key='2' onClick={this.logout}>
      Logout
    </Menu.Item>
  ]
  state = {
    loggedIn: false,
    menuItems: this.menu.slice(0, 1)
  }

  render () {
    return (
      <>
        <Location>{this.getBurgerMenu}</Location>
        <Location>{this.getLogoAndUser}</Location>
        <Router id='page'>
          <Home path='/' />
          <Offer path='/offer/:zone' />
          <Redirect from='/admin' path='/admin' to='/admin/home' />
          <Admin path='/admin/:page' render={this.adminPage} />
          <Login path='/login' />
          <NotFound default />
        </Router>
      </>
    )
  }

  getLoginState = () => {
    fetch('/api/loggedIn', { credentials: 'include' })
      .then(r => r.json())
      .then(loggedIn => {
        const menuItems = loggedIn.ok
          ? this.menu.slice(1)
          : this.menu.slice(0, 1)
        if (loggedIn.ok && loggedIn.type !== 'admin') menuItems.splice(0, 1)
        this.setState({ loggedIn, menuItems })
      })
      .catch(e => {
        console.error(e)
        this.setState({ loggedIn: false, menuItems: this.menu.slice(0, 1) })
      })
  }

  componentDidMount () {
    this.getLoginState()
    setTimeout(this.getLoginState, 500)
    setTimeout(this.getLoginState, 1500)
    setTimeout(this.getLoginState, 2500)
  }

  getLogoAndUser = ({ location }) => {
    if (/login|admin/.test(location.href)) return null
    return (
      <>
        <Logo src={logoImg} alt='Chomok Logo' onClick={this.navigate('/')} />
        <Dropdown
          path='/!login'
          overlay={<Menu children={this.state.menuItems} />}
          trigger={['click']}>
          <UserIcon
            alt='User Icon'
            src={userImg}
            onMouseOver={this.getLoginState}
          />
        </Dropdown>
      </>
    )
  }

  getBurgerMenu = ({ location }) =>
    !/admin/.test(location.href) ? (
      <BurgerMenu outerContainerId='root' pageWrapId='page'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/contact'>Contact Us</Link>
      </BurgerMenu>
    ) : null

  adminPage = page => {
    if (!this.state.loggedIn) {
      navigate('/login')
      return null
    }
    if (page === 'home') return <h1>:)</h1>
    if (page === 'offers') return <OffersAdmin />
    if (page === 'add-offer') return <AddOfferAdmin />
    if (page === 'zones') return <ZonesAdmin />
  }
}

export default App
