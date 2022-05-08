// Remove duplicates
let a = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6];

// change Obj type
let b = [...new Set(a)];

// brute force
let c = [];
let d = [];
c = a.sort((a,b) => a - b)
for (let i = 0; i < c.length; i++) {
    if (i === 0) {
        d.push(c[i]);
    }
    else if (c[i] !== c[i-1]) {
        d.push(c[i]);
    }
}


console.log(a);
console.log(b);
console.log(c);
console.log(d);