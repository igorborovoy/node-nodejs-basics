import { fork } from 'child_process';

export const spawnChildProcess = async (args) => {
    const childProcess = fork('./files/script.js', args);
};

spawnChildProcess([1,2,3,4])