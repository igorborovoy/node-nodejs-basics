import { createWriteStream } from 'fs';

export const write = async () => {
    const outputStream = createWriteStream('./files/fileToWrite.txt');
    process.stdin.on('readable', () => {
        let chunk = process.stdin.read();
        outputStream.write(chunk)
    });
};

write();