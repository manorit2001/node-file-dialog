const dialog = require('file-dialog')
dialog({type: 'directory'})
    .then(dir => console.log(dir))
    .catch(err => console.log(err))
