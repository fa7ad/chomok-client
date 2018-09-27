import React from 'react'
import { partial } from 'ramda'

import Menu from 'react-burger-menu'
import { Link, navigate, Router } from '@reach/router'

import Loadable from 'react-loadable'
import loading from './components/Loading'

import Logo from './components/Logo'
import { Row } from './components/Layout'

import logoImg from './img/logo.png'

const AsyncHome = Loadable({
  loading,
  loader () {
    return import('./components/Home')
  }
})

const App = props => (
  <div id='page-container'>
    <Menu.slide outerContainerId='page-container' pageWrapId='page-content'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About Us</Link>
      <Link to='/contact'>Contact Us</Link>
    </Menu.slide>
    <Logo src={logoImg} alt='Chomok Logo' onClick={partial(navigate, ['/'])} />
    <Row id='page-content'>
      <Router primary>
        <AsyncHome path='/' />
      </Router>
    </Row>
  </div>
)

export default App
