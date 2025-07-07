const fs = require('fs');

if (!fs.existsSync('myFolder')) {
    fs.mkdir('myFolder', (err) => {
        if (err) {
            console.error('Error creating directory:', err);
            return;
        }
        console.log('Directory created');
    });
} else {
    console.log('Directory already exists');
}