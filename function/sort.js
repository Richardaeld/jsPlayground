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

const alphaNumAray = [1, 100000, 21 ,30 ,4, "Goat", "Vipis", "Omeron", "Bitis"]
// console.log(alphaNumAray)

function alphaNumAscend (array) {
    if (!array.length) return;
    const num = [];
    const alpha = [];

    array.forEach((element) => {
        isNaN(element) ? alpha.push(element) : num.push(element)
    });

    num.sort((a,b) => a -b);
    alpha.sort();
    return [alpha + num]
}

console.log(alphaNumAscend(alphaNumAray))
console.log(alphaNumAscend(emptyArray))