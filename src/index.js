import React from 'react'
import ReactDOM from 'react-dom'

import 'antd/dist/antd.css'
import './styles/burger-menu.css'
import './styles/index.css'

function renderApp () {
  const App = require('./App').default
  ReactDOM.render(<App />, document.querySelector('#root'))
}

renderApp()

module.hot.accept(renderApp)
