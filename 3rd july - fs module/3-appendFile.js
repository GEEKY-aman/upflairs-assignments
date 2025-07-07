const fs = require('fs');

fs.appendFile('log.txt', '\nAppended Text', (err) => {
    if (err) {
        console.error('Error appending file:', err);
        return;
    }
    console.log('Successfully appended to log.txt');
});