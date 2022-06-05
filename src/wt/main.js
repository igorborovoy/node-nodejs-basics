import { Worker } from 'worker_threads';
import { cpus } from 'os';

export const performCalculations = async () => {
    const numberOfCpus = cpus().length;
    let n = 10;
    const promises = [];
    
    for(let i = 0; i < numberOfCpus; i++) {
        promises.push(createWorkerPromise(n));
        n++;
    }

    function createWorkerPromise(n) {
        return new Promise((resolve, reject) => {
            const worker = new Worker('./worker.js', {workerData: n});
            worker.on('message', (data) => resolve(data));
            worker.on('error', (err) => reject(err))
        });
    }
    
    Promise.allSettled(promises).then((data) => console.log(data));
    
};

performCalculations();