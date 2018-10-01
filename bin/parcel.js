#!/usr/bin/env node
const path = require('path')
const express = require('express')
const fetch = require('cross-fetch')
const Bundler = require('parcel-bundler')
const proxy = require('http-proxy-middleware')

const port = Number(process.env.PORT || 1234)

const { proxy: proxyConf } = require(path.resolve(
  __dirname,
  '..',
  'package.json'
))
const bundler = new Bundler('index.html', {
  autoinstall: false
})

const app = express()

app.use(proxyConf.path, proxy(proxyConf.target, { logLevel: 'error' }))

app.use(bundler.middleware())

fetch(proxyConf.target)
  .then(res => {
    app.listen(port, _ => console.log(`🚀 http://localhost:${port}/`))
  })
  .catch(e => {
    console.error('Proxy server failed to start')
    console.error('Make sure the backend is running')
    process.exit(1)
  })
