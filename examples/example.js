const { dialog } = require('@fheahdythdr/node-file-dialog')
const config = {
    dialogtype: 'open-file'
};
const result = dialog(config).then((result) => {
    console.log(result);
});
