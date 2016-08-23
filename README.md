
# osx-find-executable

Find an app's executable by its bundle id.

## Usage

```js
const find = require('osx-find-executable')

find('com.google.Chrome', (err, exec) => {
  // => /Applications/Google Chrome.app/Contents/MacOS/Google Chrome 
})
```

## Installation

```bash
$ npm install osx-find-executable
```

## API

### find(id, cb(err, exec))

## License

MIT
