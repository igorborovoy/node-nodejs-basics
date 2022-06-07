import { rename as renameFile } from 'fs';

export const rename = async () => {
    const callback = (err) => {
        if (err) throw new Error('FS operation failed');
    }

    const filePath = './files';
    renameFile(`${filePath}/wrongFilename.txt`, `${filePath}/properFilename.md`, callback);

};

rename();