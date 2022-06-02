import { access, constants, appendFile } from 'fs';

export const create = async () => {
    const path = './files/fresh.txt';
    access(path, constants.F_OK, (err) => {
        if (!err) {
            throw Error('FS operation failed');
        }

        appendFile(path, 'I am fresh and young', (err) => {
            if (err) {
                throw err;
            }
        });
    });
};

create();