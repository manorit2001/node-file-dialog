# node-file-dialog

A NodeJS library that lets you open file dialogs

## Getting started
### Installation
```
npm install @fheahdythdr/node-file-dialog
```

### Usage
The configuration has 6 properties, 1 being required.
Optional properties are:
```
ext: default file extension
types: Object<string, string> (available file extensions you can pick from/save as)
startdir: start directory for file explorer
startfile: file selected when file explorer opens
title: title of explorer window
```

Required property is:
```
dialogtype: type of dialog to open, directory, save-file, open-file or open-files
```

Open the dialog with no extra options:

```js
const dialog = require('node-file-dialog').dialog
const config = {
    dialogtype: 'directory'
}
dialog(config)
    .then(dir => console.log(dir))
    .catch(err => console.log(err))
```

A promise is returned that resolves to an array containing all selected files.

```js
[ '/path/to/selected/folder/or/files', ... ]
```

If the user cancels, it throws an error.
```
Error: Nothing selected
```

## Notes

This will eventually have a compiled .exe instead of requiring python, at which point I will likely make a pull request.
