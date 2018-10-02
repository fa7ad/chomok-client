import { setConfig, cold } from 'react-hot-loader'
import ReactDOM from 'react-dom'

import 'antd/dist/antd.css'
import './styles/burger-menu.css'
import './styles/index.css'

import App from './App'

setConfig({
  onComponentRegister: (type, name, file) =>
    file.indexOf('node_modules') > 0 && cold(type),
  logLevel: false
})

const render = Component => () =>
  ReactDOM.render(<Component />, document.querySelector('#root'))

render(App)()

if (module.hot) {
  module.hot.accept('./App', render(App))
}
