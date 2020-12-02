const dialog = require(__dirname + '/index.js')
dialog({type: 'directory'})
    .then(dir => console.log(dir))
    .catch(err => console.log(err))
