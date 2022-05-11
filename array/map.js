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
        age: 25
    }
]

// list full names
const firstLast = objArray.map(x => x.first + " " +  x.last)

// console.log(firstLast)

// find same ages
let sameAges = objArray.map(outer => {
    return objArray.map(inner => {
        if (outer.age === inner.age && outer.first !== inner.first) {
            return outer.first + " same age as " + inner.first + " they are " + outer.age;
        } else {
            return;
        }
    });
});

sameAges = sameAges.map(x => {
    return x.filter(y => {
        return y !== undefined
    })
})

console.log(sameAges)