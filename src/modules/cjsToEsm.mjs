import path from 'path';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';

const random = Math.random();

export const unknownObject = random > 0.5
    ? JSON.parse(await readFile('./files/a.json'))
    : JSON.parse(await readFile('./files/b.json'));

const fileName = fileURLToPath(import.meta.url);
const dirPath = path.dirname(fileName);
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileName}`);
console.log(`Path to current directory is ${dirPath}`);

export const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

