const fs = require('fs');

if (fs.existsSync('data.json')) {
    console.log('data.json exists');
} else {
    console.log('data.json does not exist');
}