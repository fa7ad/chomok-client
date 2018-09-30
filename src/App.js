import { hot } from 'react-hot-loader'
import React, { PureComponent } from 'react'
import { Link, navigate, Match } from '@reach/router'

// UI components
import { Menu, Dropdown } from 'antd'
import BurgerMenu from 'react-burger-menu'

// Custom components
import Logo from './components/Logo'
import UserIcon from './components/UserIcon'
import Router from './components/TransitionRouter'

// Routes wrapped with react-loadable
import { Home, NotFound, Offer } from './asyncPages'

// Resources
import logoImg from './img/logo.png'
import userImg from './img/user.png'

class App extends PureComponent {
  state = {
    loggedIn: false
  }

  render () {
    return (
      <>
        <BurgerMenu.slide outerContainerId='root' pageWrapId='page'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/contact'>Contact Us</Link>
        </BurgerMenu.slide>

        <Match path='/login'>{this.getLogoAndUser(this.state.loggedIn)}</Match>

        <Router id='page'>
          <Home path='/' />
          <Offer path='/offer/:zone' />
          <NotFound default />
        </Router>
      </>
    )
  }

  navigate = addr => e => {
    navigate(addr)
  }

  getLogoAndUser = loggedIn => props => {
    if (props.match) return null
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
        <>
          <Menu.Item onClick={this.navigate('/admin')}>Settings</Menu.Item>
          <Menu.Item onClick={this.navigate('/logout')}>Logout</Menu.Item>
        </>
      ) : (
        <Menu.Item onClick={this.navigate('/login')}>Login</Menu.Item>
      )}
    </Menu>
  )
}

export default hot(module)(App)
