const {exec} = require('child_process');
const path = require('path');
const root = __dirname;

function askdialog(config) {
  var cmd = path.join('python', 'dist')
  var filename = 'dialog'
  if (process.arch === 'x86') filename += '-x86'
  if (process.platform === 'linux') cmd = path.join(cmd, 'linux', filename)
  if (process.platform === 'win32') cmd =
      path.join(cmd, 'windows', filename + '.exe')
  if (config.type === 'directory')
  cmd += ' -d';
  else if (config.type === 'saveFile')
  cmd += ' -s';
  else if (config.type === 'openFile')
  cmd += ' -o';
  else if (config.type === 'openMultipleFiles')
  cmd += ' -f';
  var promise = new Promise((resolve, reject) => {
    exec(path.join(root, cmd), (error, stdout, stderr) => {
      var ignorableError = false;
      if (error) {
        reject(new Error(error));
      } else if (stderr) {
        if (stderr.search('Fontconfig warning:') != -1) {
          ignorableError = false;
        } else {
          ignorableError = true;
          reject(new Error(stderr));
        }
      }
      if (ignorableError == false) {
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
