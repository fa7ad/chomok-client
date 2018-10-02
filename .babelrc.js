// presets
const presetConf = {
  '@babel/preset-env': { useBuiltIns: 'usage', targets: '>10%' },
  '@babel/preset-react': { pragmaFrag: 'React.Fragment' }
}

// plugins
const pluginConf = {
  '@babel/plugin-proposal-class-properties': {},
  emotion: {},
  import: { libraryName: 'antd', style: 'css' },
  'auto-import': {
    declarations: [
      {
        default: 'React',
        path: 'react'
      },
      {
        default: 'PropTypes',
        path: 'prop-types'
      }
    ]
  }
}

// combine presets and plugins
const presets = Array.from(Object.entries(presetConf))
const plugins = Array.from(Object.entries(pluginConf))

module.exports = { presets, plugins }
