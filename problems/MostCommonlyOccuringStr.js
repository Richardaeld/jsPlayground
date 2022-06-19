const array = ["one", "two", "3", "3", "4", "4", "4", "2", "one", "one", "two", "one", "one"];
const arrayWithTie = ["one", "two", "3", "3", "4", "4", "4", "2", "one", "one", "two", "one", "one", "two", "two", "two"];

function commonWithTie (array) {
    if (!array.length) return;
    countedObj = {}

    array.forEach((element) => {
        countedObj[element] ? countedObj[element] += 1 : countedObj[element] = 1
    });

    const sortArray = [];
    Object.keys(countedObj).forEach((key) => {
        sortArray.push([key, countedObj[key]]);
    })

    sortArray.sort((a,b) => a[1] - b[1]);

    const highestCount = sortArray[sortArray.length - 1][1];
    const resultArray = []

    sortArray.forEach(arr => {
        if (arr[1] === highestCount) resultArray.push(arr[0] + " with " + arr[1] + " counts");
    });


    return resultArray;
}



// console.log(commonWithTie(array));
console.log(commonWithTie(arrayWithTie));
