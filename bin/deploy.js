#!/usr/bin/env node
const fse = require('fs-extra')
const path = require('path')

const serverDir = path.resolve(__dirname, '..', 'chomok-server')

fse
  .emptyDir(path.join(serverDir, 'build'))
  .then(e => {
    console.log(e)
    return fse.copy(
      path.join(__dirname, 'build'),
      path.join(serverDir, 'build')
    )
  })
  .then(e => {
    console.log('Done!', e)
  })
  .catch(console.error)
