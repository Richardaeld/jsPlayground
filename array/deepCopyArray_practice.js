// Create a deep copy.
// This copy has no memory relation to the original and will not mutate the original array if changed

const array1 = [1,4,2,1,5,78,43,2,1,3,4,32,43,2,1];
console.log("original pre mutation", array1);

// loop
const new1 = []
for (let i = 0; i < array1.length; i++) {
    new1.push(array1[i])
}
// map
const new2 = array1.map(x => x);
// spreader
const new3 = [...array1];

// shallow copy
const new4 = array1;

// More work needed to remember these
// object
const new5 = Object.assign([], array1)
// json
const new6 = JSON.parse(JSON.stringify(array1))


array1.push(100);

console.log("New 1", new1)
console.log("New 2", new2);
console.log("New 3", new3);
console.log("New 4", new4);
console.log("New 5", new5);
console.log("New 6", new6);

console.log("original after mutation", array1);