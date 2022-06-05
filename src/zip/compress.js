import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createGzip } from 'zlib';

export const compress = async () => {
    const readStream = createReadStream('./files/fileToCompress.txt', 'utf-8');
    const writeStream = createWriteStream('./files/archive.gz');
    const gzip = createGzip();

    pipeline(
        readStream,
        gzip,
        writeStream,
        err => new Error(err)
    );
};

compress();