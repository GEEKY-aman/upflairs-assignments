const fs = require('fs');
const readline = require('readline');

if (!fs.existsSync('data.json')) {
    fs.writeFileSync('data.json', JSON.stringify({ username: 'abc', password: 123 }));
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter username: ', (user) => {
    rl.question('Enter password: ', (pass) => {
        const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
        if (user === data.username && parseInt(pass) === data.password) {
            console.log('✅ Authentication successful!');
        } else {
            console.log('❌ Invalid username or password.');
        }
        rl.close();
    });
});