"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dialog = void 0;
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const os_1 = require("os");
function dialog(config) {
    var cmd = ""; //path.join('python', 'python-static')
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
    if (config.ext)
        cmd += ` -ext="${config.ext}"`;
    else if (config.types && config.ext === undefined) {
        cmd += ` -ext="${config.types[0].display}"`;
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
        cmd += ']"';
    }
    if (config.startdir)
        cmd += ` -dir="${config.startdir}"`;
    if (config.startfile)
        cmd += ` -file="${config.startfile}"`;
    if (config.title)
        cmd += ` -title="${config.title}"`;
    var promise = new Promise((resolve, reject) => {
        (0, child_process_1.exec)("python \"" + path_1.default.join(__dirname, "../") + '/python/dialog.py\" ' + cmd, (error, stdout, stderr) => {
            if (stdout) {
                if (stdout.trim() === 'None')
                    reject(new Error('Nothing selected'));
                else
                    resolve(stdout.trim().split(os_1.EOL));
            }
            else if (error) {
                reject(new Error(error.message));
            }
            else if (stderr) {
                reject(new Error(stderr));
            }
        });
    });
    return promise;
}
exports.dialog = dialog;
exports.default = dialog;