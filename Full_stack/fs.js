const fs = require('fs');

async function createFile() {
    fs.writeFile('example.txt', 'Hello, World!',()=> {
        console.log('File created and data written!');
        
    });
}
createFile();
// await sleep(2000); // Wait for 2 seconds
// console.log('After 2 seconds');

async function appendFile() {
    fs.appendFile('example.txt', ' This is an appended text.', () => {
        console.log('Data appended to file!');
    });
}
appendFile();
 
fs.readFile('example.txt', 'utf8', (err, data) => {
    console.log('Reading file...');
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

fs.rename('example.txt', 'newfile.txt', (err) => {
    if (err) throw err;
    console.log('File renamed!');
});

fs.unlink('newfile.txt', (err) => {
    if (err) throw err;
    console.log('File deleted!');
});

if (fs.existsSync('example.txt')) {
    console.log('File exists!');
} else {
    console.log('File not found!');
}

fs.mkdir('myfolder', (err) => {
    if (err) throw err;
    console.log('Directory created!');
});

fs.rmdir('myfolder', (err) => {
    if (err) throw err;
    console.log('Directory deleted!');
});

fs.readdir('.', (err, files) => {
    if (err) throw err;
    console.log('Files in directory:', files);
});
