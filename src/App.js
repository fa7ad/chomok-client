import React from 'react'
import BurgerMenu from 'react-burger-menu'
import Loadable from 'react-loadable'
import { Menu, Dropdown } from 'antd'
import { Link, navigate, Router, Match } from '@reach/router'

import { partial } from 'ramda'

import Logo from './components/Logo'
import { Row } from './components/Layout'
import UserIcon from './components/UserIcon'

import loading from './components/Loading'
import logoImg from './img/logo.png'
import userImg from './img/user.png'

const AsyncHome = Loadable({
  loading,
  loader () {
    return import('./pages/Home')
  }
})

class App extends React.Component {
  state = {
    navItems: [['Login', '/login']]
  }

  render () {
    const menu = (
      <Menu>
        {this.state.navItems.map((el, idx) => (
          <Menu.Item key={idx} onClick={partial(navigate, [el[1]])}>
            {el[0]}
          </Menu.Item>
        ))}
      </Menu>
    )
    return (
      <div id='page-container'>
        <BurgerMenu.slide
          outerContainerId='page-container'
          pageWrapId='page-content'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/contact'>Contact Us</Link>
        </BurgerMenu.slide>

        <Logo
          src={logoImg}
          alt='Chomok Logo'
          onClick={partial(navigate, ['/'])}
        />
        <Match path='/login'>
          {p =>
            !!p.match || (
              <Dropdown path='/!login' overlay={menu} trigger={['click']}>
                <UserIcon alt='User Icon' src={userImg} />
              </Dropdown>
            )
          }
        </Match>
        <Row id='page-content'>
          <Router primary>
            <AsyncHome path='/' />
          </Router>
        </Row>
      </div>
    )
  }
}

export default App
