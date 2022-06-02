import { readFile } from 'fs';

export const read = async () => {
     const filePath = './files/fileToRead.txt';

     readFile(filePath, {encoding: 'utf-8'}, (err, buff) => {
         if (err) throw new Error('FS operation failed');
         console.log(buff);
     });
};

read();