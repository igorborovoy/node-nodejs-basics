import { readFile } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {
     const __filename = fileURLToPath(import.meta.url)
     const __dirname = path.dirname(__filename);
     readFile(__dirname + '/files/fileToRead.txt', {encoding: 'utf-8'}, (err, buff) => {
         if (err) throw new Error('FS operation failed');
         console.log(buff);
     });
};

read();