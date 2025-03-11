
const obj = {
    name: 'John',
    age: 25,
    city: 'New York'
};


console.log('Object Properties:');
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}


delete obj.age;

console.log('\nAfter Deleting Second Property:');
console.log(obj);


const length = Object.keys(obj).length;
console.log('\nLength of the Object:', length);