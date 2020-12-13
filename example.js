const dialog = require('node-file-dialog')
const config = {
  type: 'directory'
};
dialog(config).then(dir => console.log(dir)).catch(err => console.log(err))
