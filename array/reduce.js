const array = [1,2,3,4,5,6,7,8,9];

const total = array.reduce((acc, currnet) => {
    return acc + currnet;
},0)

// console.log(total);

const objArray = [
    {
        first: "John",
        last: "Doe",
        age: 19
    },
    {
        first: "Jogh",
        last: "Doe",
        age: 25
    },
    {
        first: "Jane",
        last: "Smith",
        age: 37
    },
    {
        first: "Jasmine",
        last: "Smith",
        age: 15
    },
    {
        first: "Amon",
        last: "Omaron",
        age: 52
    }
]

const sameAge = objArray.reduce((acc, current) => {
    if (acc[current.age]) {
        current.age = ++acc[current.age];
    } else {
        acc[current.age] = 1;
    }

    return acc

},{});

// console.log(sameAge)


const obj = objArray.reduce((acc, current) => {
    if (acc[current.last]) {
        acc[current.last].push(current);
    } else {
        acc[current.last] = [current];
    }

    return acc;
}, {})


// first name of age less than 30
const lessThan30 = objArray.filter(x => x.age < 30).map(x => x.first)

// console.log("less than 30", lessThan30)

const lessThan30Reduce = objArray.reduce((acc, current) => {

    if (current.age < 30) {
        acc.push(current.first)
    }

    return acc
}, [])

console.log("lessThan30Reduce ", lessThan30Reduce)



// console.log(obj)


// console.log(Math.max(...array))

// const newArray = array.reduce((acc, current) => acc + current, 0)

// console.log(newArray, 'new array')