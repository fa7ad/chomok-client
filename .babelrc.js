// presets
const presetConf = {
  '@babel/preset-env': { useBuiltIns: 'usage' },
  '@babel/preset-react': { pragmaFrag: 'React.Fragment' }
}

// plugins
const pluginConf = {
  '@babel/plugin-proposal-class-properties': {},
  'emotion': {},
  'auto-import': {
    declarations: [
      {
        default: 'React',
        members: ['Component', 'PureComponent'],
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
