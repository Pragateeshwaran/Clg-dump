console.log('\n--- PATH MODULE OPERATIONS ---');
const path = require('path');
const filePath = path.join(__dirname, 'folder', 'example.txt');
console.log('Joined Path:', filePath);              // Combines paths safely

console.log('Base Name:', path.basename(filePath)); // Extracts file name
console.log('Directory Name:', path.dirname(filePath)); // Extracts directory
console.log('File Extension:', path.extname(filePath)); // Extracts file extension

const absolutePath = path.resolve('folder', 'example.txt');
console.log('Absolute Path:', absolutePath);        // Resolves to absolute path

const parsedPath = path.parse(filePath);
console.log('Parsed Path:', parsedPath);            // Provides path details as an object