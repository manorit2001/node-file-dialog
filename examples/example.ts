import { dialog, Config } from "@fheahdythdr/node-file-dialog";

const config: Config = {
    dialogtype: 'open-file'
}

dialog(config).then((result) => {
    console.log(result);
});
