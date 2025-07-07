const fs = require('fs');

fs.readdir('myFolder', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    console.log('Files in myFolder:', files);
});