import { readFile } from 'fs';
import crypto from 'crypto';

export const calculateHash = async () => {
    const file = readFile('./files/fileToCalculateHashFor.txt', (err, data) => {
        if (err) throw new Error('FS operation failed');
        const hash = crypto.createHash('sha256').update(data).digest('hex');
        console.log(hash)
    });
};

calculateHash();