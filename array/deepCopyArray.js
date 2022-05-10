// Fully copt array and not just reference (shallow) copy
let  a = [1,2,3,4,5];


// This is a reference!! Not a copy
let b = a;

// For loop
let c = [];
for (let i = 0; i < a.length; i++) {
    c.push(a[i])
}

// spread operator
let d = [...a]

// map
let e = [];
a.map(x => {
    e.push(x)
})

// Object.assisn
// Calls Object constructor with method assign
let f = Object.assign([], a)

// JSON.stringify
let g = JSON.parse(JSON.stringify(a))


a.push(6)

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
