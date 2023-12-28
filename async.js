const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return null;
    }

    console.log('finished first read');

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return null;
        }

        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return null;
            }

            console.log('done with task');
        });
        console.log('second read finished');
    });
    console.log('starting next task after first read');
});

console.log('Starting first task');