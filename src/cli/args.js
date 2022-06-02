export const parseArgs = () => {
    const filteredArgs = process.argv.slice(2);
    const arr = filteredArgs.map(
        (item) => item.startsWith('--') ? item.slice(2).concat(' is') : item.concat(',')
    ).join(' ');

    console.log(arr)
};

parseArgs();