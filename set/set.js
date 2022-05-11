// Set only allow unique vales within it

array = [1,2,2,3,3,4,4,4,5];
console.log(array);

console.log([...new Set(array)])
