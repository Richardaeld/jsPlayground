const array = [1,2,3,4,5,6,7,8,9];

const total = array.reduce((acc, currnet) => {
    return acc + currnet;
},0)

console.log(total);

const objArray = [
    {
        first: "John",
        last: "Doe"
    },
    {
        first: "Jogh",
        last: "Doe"
    },
    {
        first: "Jane",
        last: "Smith"
    },
    {
        first: "Jasmine",
        last: "Smith"
    },
]


const obj = objArray.reduce((acc, current) => {
    if (acc[current.last]) {
        acc[current.last].push(current);
    } else {
        acc[current.last] = [current];
    }

    return acc;
}, {})

console.log(obj)