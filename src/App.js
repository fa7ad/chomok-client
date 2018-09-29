import React, { Fragment } from 'react'
import { hot } from 'react-hot-loader'

import Loadable from 'react-loadable'
import { Link, navigate, Match } from '@reach/router'

import { Menu, Dropdown } from 'antd'
import BurgerMenu from 'react-burger-menu'

import Logo from './components/Logo'
import loading from './components/Loading'
import UserIcon from './components/UserIcon'

import Router from './components/TransitionRouter'

import logoImg from './img/logo.png'
import userImg from './img/user.png'

const Home = Loadable({
  loading,
  loader () {
    return import('./pages/Home')
  }
})
const NotFound = Loadable({
  loading,
  loader () {
    return import('./pages/NotFound')
  }
})

class App extends React.Component {
  state = {
    navItems: [{ key: 'login', caption: 'Login', link: '/login' }]
  }

  render () {
    const { navItems } = this.state
    const menu = (
      <Menu>
        {navItems.map(it => (
          <Menu.Item
            key={it.key}
            onClick={e => navigate(it.link)}
            children={it.caption}
          />
        ))}
      </Menu>
    )

    return (
      <Fragment>
        <BurgerMenu.slide outerContainerId='root' pageWrapId='page'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/contact'>Contact Us</Link>
        </BurgerMenu.slide>

        <Match
          path='/login'
          children={p =>
            !!p.match || (
              <Fragment>
                <Logo
                  src={logoImg}
                  alt='Chomok Logo'
                  onClick={e => navigate('/')}
                />
                <Dropdown path='/!login' overlay={menu} trigger={['click']}>
                  <UserIcon alt='User Icon' src={userImg} />
                </Dropdown>
              </Fragment>
            )
          }
        />

        <Router id='page'>
          <Home path='/' navItems={[{ name: 'Zigatola', id: 'xyziggs' }]} />
          <NotFound default />
        </Router>
      </Fragment>
    )
  }
}

export default hot(module)(App)
