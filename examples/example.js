const { dialog } = require('../dist/dialog.js')
const config = {
    dialogtype: 'open-file'
};
const result = dialog(config).then((result) => {
    console.log(result);
});
