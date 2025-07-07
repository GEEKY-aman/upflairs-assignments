const fs = require('fs');

fs.copyFile('hello.txt', 'copy-hello.txt', (err) => {
    if (err) {
        console.error('Error copying file:', err);
        return;
    }
    console.log('File copied successfully');
});