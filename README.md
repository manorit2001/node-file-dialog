# node-file-dialog
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

