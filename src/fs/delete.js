import { rm } from 'fs';

export const remove = async () => {
    const callback = (err) => {
        if (err) throw new Error('FS operation failed');
    }
    const filePath = './files/fileToRemove.txt';

    rm(filePath, callback);
};

remove();