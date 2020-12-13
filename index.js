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
  else if (config.type === 'save-file')
  cmd += ' -s';
  else if (config.type === 'open-file')
  cmd += ' -o';
  else if (config.type === 'open-files')
  cmd += ' -f';
  var promise = new Promise((resolve, reject) => {
    exec(path.join(root, cmd), (error, stdout, stderr) => {
      if (stdout) {
        if (stdout.trim() === 'None')
          reject(new Error('Nothing selected'));
        else
          resolve(stdout.trim().split('\n'))
      } else if (error) {
        reject(new Error(error));
      } else if (stderr) {
        reject(new Error(stderr));
      }
    });
  })
  return promise;
}

module.exports = askdialog;
