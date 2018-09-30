import React from 'react'

import Loadable from 'react-loadable'
import loading from './components/Loading'

export const Home = Loadable.Map({
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

export const Offer = Loadable({
  loading,
  loader: _ => import('./pages/Offer')
})

export const NotFound = Loadable({
  loading,
  loader: _ => import('./pages/NotFound')
})
