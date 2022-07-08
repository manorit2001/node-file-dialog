declare module 'node-file-dialog' {
    export type DialogType = 'directory' | 'save-file' | 'open-file' | 'open-files';
    export function dialog(config: {type: DialogType}): Promise<string[]>;
    export default dialog;
}
