import ReactDOM from 'react-dom'

// import 'antd/dist/antd.css'
import './styles/burger-menu.css'
import './styles/index.css'

import App from './App'

const render = Component => () =>
  ReactDOM.render(<Component />, document.querySelector('#root'))

render(App)()

if (module.hot) {
  module.hot.accept('./App', render(App))
}
