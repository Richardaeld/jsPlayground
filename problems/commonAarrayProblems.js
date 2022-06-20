// Map, Filter, reduce
// ----------------- Map
const num = [1,2,3,4,5];
function mapFunc1 (array) {
    return array.map((x) => x * 10);
}

const mapFunc2 = function (array) {
    return array.map((x) => x * 10)
}

const mapFunc3 = array => array.map(x => x * 10);

console.log("mapFunc1", mapFunc1(num))
console.log("mapFunc2", mapFunc2(num))
console.log("mapFunc3", mapFunc3(num))

// ----------------- Filter
function filterFunc1 (array) {
    return array.filter((x) => x % 2 === 0);
}

const filterFunc2 = function (array) {
    return array.filter((x) => x % 2 === 0)
}

const filterFunc3 = (array) => array.filter((x) => x % 2 === 0);

console.log("filterFunc1", filterFunc1(num));
console.log("filterFunc2", filterFunc2(num));
console.log("filterFunc3", filterFunc3(num));

// ----------------- Reduce
function reduceFunc1 (array) {
    return array.reduce((previous, current) => (previous + current), 0);
}

const reduceFunc2 = function (array) {
    return array.reduce((previous, current) => (previous + current), 0)
}

const reduceFunc3 = (array) => array.reduce((previous, current) => (previous + current), 0)

console.log("reduceFunc1", reduceFunc1(num));
console.log("reduceFunc2", reduceFunc2(num));
console.log("reduceFunc3", reduceFunc3(num));

// ----------------- Adv Reduce
// Group all similar last names
const people = [
    {
        first: "John",
        last: "Doe"
    },
    {
        first: "John",
        last: "Smith"
    },
    {
        first: "Jane",
        last: "Doe"
    },
    {
        first: "Jane",
        last: "Smith"
    }
]

console.log(people[0]['last'])

function GroupNames (array, name) {
    array.reduce((previous, current) => {
        if (!previous[current['last']]) {
            previous = (current['last'])
        }
        return previous
    }, {})
}

console.log(GroupNames(people, "Doe"))