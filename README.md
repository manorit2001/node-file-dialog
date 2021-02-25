# node-file-dialog
[![Issues](https://img.shields.io/github/issues/manorit2001/node-file-dialog)](https://github.com/manorit2001/node-file-dialog/issues)
[![Version](https://img.shields.io/npm/v/node-file-dialog)](https://www.npmjs.com/package/node-file-dialog)
[![Downloads](https://img.shields.io/npm/dt/node-file-dialog)](https://www.npmjs.com/package/node-file-dialog)
[![License](https://img.shields.io/npm/l/node-file-dialog)](https://www.npmjs.com/package/node-file-dialog)

Opens file dialog gui in nodejs server side

## Compatibilty
Currently supports 64 bit architecture only

## Getting Started
### Installation
```
npm install node-file-dialog
```

### Usage
The configuration supports following dialog types
- `directory`: Opens directory selection prompt
- `save-file`: Opens save file prompt
- `open-file`: Opens open file prompt
- `open-files`: Opens open file prompt where multiple files can be selected


```
const dialog = require('node-file-dialog')
const config={type:'directory'}
dialog(config)
    .then(dir => console.log(dir))
    .catch(err => console.log(err))
```
It returns a promise with the list of selected files
```
[ '/path/to/selected/folder/or/files', ... ]
```

If nothing is selected, It throws an error
```
Error: Nothing selected
```

