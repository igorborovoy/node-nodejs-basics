import { access, constants, copyFile, mkdir, readdir } from 'fs';

export const copy = async () => {
    const callback = (err) => {
        if (err) throw new Error('FS operation failed');
    }
    const srcPath = './files';
    const destPath = './files-copy';

    access(srcPath, constants.F_OK, callback);
    mkdir(destPath, callback);
    readdir(srcPath, (err, files) => {
        if (err) throw err;
        files.forEach((filePath) => 
            copyFile(`${srcPath}/${filePath}`, `${destPath}/${filePath}`, callback))
    });
};

copy();