import { createReadStream, createWriteStream, read } from 'fs';
import { pipeline } from 'stream';
import { createUnzip } from 'zlib';


export const decompress = async () => {
    const readStream = createReadStream('./files/archive.gz');
    const writeStream = createWriteStream('./files/decompressed.txt');
    const unZip = createUnzip();
    
    pipeline(
        readStream,
        unZip,
        writeStream,
        err => new Error(err)
    )
};

decompress();