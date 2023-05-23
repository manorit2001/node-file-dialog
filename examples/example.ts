import { dialog } from "../dist/index";
import { Config } from "../dist/interfaces";

const config: Config = {
    dialogtype: 'open-file'
}

dialog(config).then((result) => {
    console.log(result);
});
