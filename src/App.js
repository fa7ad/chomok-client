import React, { Component } from 'react'
import { Link } from '@reach/router'

import { slide as Menu } from 'react-burger-menu'

class App extends Component {
  render () {
    return (
      <div id='page-container'>
        <Menu outerContainerId='page-container' pageWrapId='page-content'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/contact'>Contact Us</Link>
        </Menu>
        <div id='page-content'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam,
          modi.
        </div>
      </div>
    )
  }
}

export default App
