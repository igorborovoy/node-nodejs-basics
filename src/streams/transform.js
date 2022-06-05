import { createWriteStream } from 'fs';
import { pipeline, Transform } from 'stream';

export const transform = async () => {
    const readStream = process.stdin;
    const writeStream = process.stdout;
    const transformStream = new Transform({
        transform(chunk, enc, cb) {
            const trasformedChunk = chunk.toString().trim().split('').reverse().join('') + '\n';
            this.push(trasformedChunk);
            cb();
        }
    });

    pipeline(readStream, transformStream, writeStream, err => { throw err });
};

transform();