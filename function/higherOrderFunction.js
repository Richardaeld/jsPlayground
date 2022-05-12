const  radius = [3, 1, 2, 4]

// Area PI r^2
const area = function (radius) {
    return Math.PI * radius * radius;
};

// cicumference 2 PI r
const circumference = function (radius) {
    return 2 * Math.PI * radius;
};

// diameter 2r
const diameter = function (radius) {
    return radius * 2
}


// const calculate = function (radius, logic) {
//     const output = []
//     for (let i = 0; i < radius.length; i++) {
//         output.push(logic(radius[i]))
//     }
//     return output
// };

// console.log(calculate(radius, area))
// console.log(calculate(radius, circumference))
// console.log(calculate(radius, diameter))



const areaResults = radius.map(x => area(x))
const circumferenceResults = radius.map(x => circumference(x))
const diameterResults = radius.map(x => diameter(x))

console.log(areaResults)
console.log(circumferenceResults)
console.log(diameterResults)

