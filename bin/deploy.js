#!/usr/bin/env node
const fse = require('fs-extra')
const path = require('path')

const serverDir = path.resolve(__dirname, '..', '..', 'chomok-server')

fse
  .emptyDir(path.join(serverDir, 'build'))
  .then(e => {
    return fse.copy(
      path.resolve(__dirname, '..', 'build'),
      path.resolve(serverDir, 'build')
    )
  })
  .then(e => {
    console.log('Done!')
  })
  .catch(console.error)
