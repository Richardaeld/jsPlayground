const array1 = [1,4,2,1,5,78,43,2,1,3,4,32,43,2,1];
// remove odds
const new1 = array1.filter(x => x % 2 === 0)

// remove evens
const new2 = array1.filter(x => x % 2 !== 0)



let new3 = new1.concat(new2)
new3 = new3.sort((a,b) => a - b)

const new4 = array1.sort((a,b) => a-b)

console.log("new 1", new1)
console.log("new 2", new2)
console.log("new 3", new3)
console.log("sorted Array1", new4)