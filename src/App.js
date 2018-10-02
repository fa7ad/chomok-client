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
import AddOffer from './pages/_admin/AddOffer'
import AdminZones from './pages/_admin/Zones'

// Resources
import logoImg from './img/logo.png'
import userImg from './img/user.png'

class App extends PureComponent {
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

  getBurgerMenu = ({ Location }) =>
    !/admin/.test(location.href) ? (
      <BurgerMenu.slide outerContainerId='root' pageWrapId='page'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/contact'>Contact Us</Link>
      </BurgerMenu.slide>
    ) : null

  adminPage = page => {
    if (!this.state.loggedIn) {
      navigate('/login')
      return null
    }
    if (page === 'home') return <h1>:)</h1>
    if (page === 'offers') return <OffersAdmin />
    if (page === 'add-offer') return <AddOffer />
    if (page === 'zones') return <AdminZones />
  }
}

export default App
