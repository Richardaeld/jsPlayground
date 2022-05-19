// Reverse order of words
const str = "Is it dusk or dawn?"

// split reverse
let str1 = str.split(" ").reverse().join("")
console.log(str1)


// reverse order of words and letters
// let str2 = str.split("").reverse().join("")
// console.log(str2)

// remove grammar
// let str2 = str.split("").splice(indexOf("?"), indexOf("?")+1).reverse().join("")
// let str2 = str.split("").splice(1,2)
// console.log(str2)

let str2 = str.replace("?", "").split("").reverse().join("").toLowerCase()
console.log(str2)
