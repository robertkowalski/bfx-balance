'use strict'

const Bfx = require('bitfinex-api-node')
const conf = require('./conf/conf.json')

const bfx = new Bfx(conf)
const rest = bfx.rest(2, { transform: true })

rest.balances((err, balances) => {
  if (err) {
    return console.error('error: ' + err.message)
  }

  const res = balances.reduce((acc, el) => {
    if (el.currency !== 'usd') return acc

    acc.push(el)
    return acc
  }, [])

  console.log(JSON.stringify(res, null, '  '))
})
