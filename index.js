const exec = require('child_process').exec
const join = require('path').join
const parse = require('plist').parse
const fs = require('fs')

module.exports = (id, cb) => {
  exec(`mdfind "kMDItemCFBundleIdentifier=="${id}""`, (err, stdout) => {
    if (err) return cb(err)
    const path = stdout.trim()
    if (!path) return cb(new Error(`Not installed: ${id}`))

    fs.readFile(join(path, 'Contents', 'Info.plist'), (err, raw) => {
      if (err) return cb(err)
      const plist = parse(raw.toString())
      cb(null, join(path, 'Contents', 'MacOS', plist.CFBundleExecutable))
    })
  })
}
