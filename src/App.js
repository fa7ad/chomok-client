import React from 'react'
import { partial } from 'ramda'
import { Link, navigate, Router } from '@reach/router'
import { slide as Menu } from 'react-burger-menu'

import loading from './components/Loading'
import Loadable from 'react-loadable'

import Logo from './components/Logo'
import Row from './components/Row'

import logoImg from './img/logo.png'

const AsyncHome = Loadable({
  loading,
  loader () {
    return import('./components/Home')
  }
})

const App = props => (
  <div id='page-container'>
    <Menu outerContainerId='page-container' pageWrapId='page-content'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About Us</Link>
      <Link to='/contact'>Contact Us</Link>
    </Menu>
    <Logo src={logoImg} alt='Chomok Logo' onClick={partial(navigate, ['/'])} />
    <Row id='page-content'>
      <Router primary>
        <AsyncHome path='/' />
      </Router>
    </Row>
  </div>
)

export default App
