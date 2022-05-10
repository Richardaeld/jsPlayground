const array = [1, 3, 5, 6, 8, 10];

const even = array.filter(x => x % 2 === 0);
const odd = array.filter(x => x % 2 !== 0);
console.log(even);
console.log(odd);