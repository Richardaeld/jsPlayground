const numArr = [1, 100000, 21, 30, 4];
const emptyArray = []

function sortAscend (array) {
    if (!array.length) return;
    return array.sort((a,b) => a - b);
}

console.log(sortAscend(numArr));
console.log(sortAscend(emptyArray));

function sortDescend (array) {
    if(!array.length) return;
    return array.sort((a,b) => a - b).reverse()
}

console.log(sortDescend(numArr))
console.log(sortDescend(emptyArray))

