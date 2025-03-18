
const url = require('url');


const urlString = 'https://www.example.com/path?name=John&age=25';


const parsedUrl = url.parse(urlString, true);

console.log('Protocol:', parsedUrl.protocol); 
console.log('Host:', parsedUrl.host);         
console.log('Path:', parsedUrl.pathname);     
console.log('Query Parameters:', parsedUrl.query); 

 