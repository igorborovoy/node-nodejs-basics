import { createReadStream } from 'fs';

export const read = async () => {
    const stream = createReadStream('./files/fileToRead.txt', 'utf-8');
    let dataFromFile = '';
    stream.on('data', chunk => dataFromFile+=chunk);
    stream.on('end', () => console.log(dataFromFile));
    stream.on('error', (err) => { throw err });
};

read();