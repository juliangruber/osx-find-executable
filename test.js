const find = require('.')
const test = require('tap').test

test(t => {
  find('com.google.Chrome', (err, path) => {
    t.error(err)
    t.equal(path, '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')
    t.end()
  })
})
