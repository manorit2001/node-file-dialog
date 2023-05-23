import { Config } from "./interfaces";
import { exec } from 'child_process';
import path from 'path';
import { EOL } from 'os';

export function dialog(config: Config) {
  var cmd = ""//path.join('python', 'python-static')
  //if (process.platform === 'win32') {
  //  cmd = path.join(cmd, 'win', 'python.exe')
  //}
  if (config.dialogtype === 'directory')
    cmd += ' -d';
  else if (config.dialogtype === 'save-file')
    cmd += ' -s';
  else if (config.dialogtype === 'open-file')
    cmd += ' -o';
  else if (config.dialogtype === 'open-files')
    cmd += ' -f';
  
  if (config.ext) cmd += ` -ext="${config.ext}"`;
  else if (config.types && config.ext === undefined) {
    cmd += ` -ext="${config.types[0].display}"`
  }
  if (config.types) {
    let hasAddedStart = false;
    for (const type of config.types) {
      if (!hasAddedStart) {
        cmd += ` -types="[('${type.display}','${type.extensions}')`;
        hasAddedStart = true;
      }
      else {
        cmd += `,('${type.display}', '${type.extensions}')`;
      }
    }
    cmd += ']"'
  }
  if (config.startdir) cmd += ` -dir="${config.startdir}"`;
  if (config.startfile) cmd += ` -file="${config.startfile}"`;
  if (config.title) cmd += ` -title="${config.title}"`;


  var promise = new Promise((resolve, reject) => {
    exec("python \"" + path.join(__dirname, "../") + '/python/dialog.py\" ' + cmd, (error, stdout, stderr) => {
      if (stdout) {
        if (stdout.trim() === 'None')
          reject(new Error('Nothing selected'));
        else
          resolve(stdout.trim().split(EOL));
      } else if (error) {
        reject(new Error(error.message));
      } else if (stderr) {
        reject(new Error(stderr));
      }
    });
  })
  return promise;
}

export default dialog;