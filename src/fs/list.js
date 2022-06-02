import { readdir } from 'fs';

export const list = async () => {
    const srcPath = './files';
    readdir(srcPath, (err, files) => {
        if (err) throw new Error('FS operation falied');
        files.forEach((filePath) => console.log(filePath))
    });
};

list();