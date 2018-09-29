import React from 'react'
import PropTypes from 'prop-types'
import { Location, Router } from '@reach/router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const TransitionRouter = ({ children, ...p }) => (
  <Location>
    {({ location }) => (
      <TransitionGroup className='transition-group'>
        <CSSTransition key={location.key} classNames='fade' timeout={300}>
          <Router location={location} className='router' {...p}>
            {children}
          </Router>
        </CSSTransition>
      </TransitionGroup>
    )}
  </Location>
)

TransitionRouter.propTypes = {
  children: PropTypes.node
}

export default TransitionRouter
