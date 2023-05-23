export interface AvailableExtension {
    display: string;
    extensions: string;
}

export type DialogType = 'directory' | 'save-file' | 'open-file' | 'open-files';

export interface Config {
    dialogtype: DialogType;
    ext?: string;
    types?: AvailableExtension[]; 
    startdir?: string; 
    startfile?: string; 
    title?: string;
}