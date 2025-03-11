const str = 'aaaapple aaaand aaaalmond';


const result = str.replace(/a{2,}/g, 'b');

console.log('Original String:', str);
console.log('Modified String:', result);
