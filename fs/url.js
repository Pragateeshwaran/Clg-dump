const url = require('url');


const urlString = 'https://www.example.com/path?name=John&age=25';


const parsedUrl = url.parse(urlString, true);

console.log('Protocol:', parsedUrl.protocol); // Output: https:
console.log('Host:', parsedUrl.host);         // Output: www.example.com
console.log('Path:', parsedUrl.pathname);     // Output: /path
console.log('Query Parameters:', parsedUrl.query); // Output: { name: 'John', age: '25' }
