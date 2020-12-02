const {exec} = require('child_process');
const root = __dirname;

function askdialog(config) {
  var cmd = '/python/dist/dialog '
  if (config.type == 'directory')
  cmd += ' -d';
  else if (config.type == 'saveFile')
  cmd += ' -s';
  else if (config.type == 'openFile')
  cmd += ' -o';
  else if (config.type == 'openMultipleFiles')
  cmd += ' -f';
  var promise = new Promise((resolve, reject) => {
    exec(root + cmd, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(error.message));
      } else if (stderr) {
        reject(new Error(stderr));
      } else {
        if (stdout.trim() === 'None')
          reject(new Error('No directory selected'));
        else
          resolve(stdout.trim().split('\n'))
      }
    });
  })
  return promise;
}

module.exports = askdialog;
