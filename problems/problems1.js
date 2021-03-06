// Closure

function AddWithClosure (num1) {
    return function (num2) {
        return num1 + num2;
    }
}

const outsideFunction = AddWithClosure(10);
// console.log(outsideFunction(25))


// Hoisting
// Hoists var, function
// Only declarations get hoisted
// assignments dont get hoisted

//Promise vs callback
// Callback only receives information when the operation is completed
// Promise is given a snippet of code that represents the final product until the final process is completed

foo();

function foo () {
    var x = "I am a hoisted assignment";
    // console.log(x);
    // return console.log(x);
}

// console.log(foo());





// ---------------------------------------------------- question
// How do you add something to the beggining of and array and how do you add something to the end of an array
// let q1Array = ['b', 'c', 'd'] // add a and e
// q1Array.push('e')
// q1Array.unshift('a')
// ---or---
// q1Array = ['a', ...q1Array, 'e']

// console.log(q1Array);


// ---------------------------------------------------- question
// What is the output
// var num = 4;
// function outer() {
//     var num = 2;
//     function inner() {
//         num++;
//         var num = 3;
//         console.log(num)
//     }
//     inner();
// }
// outer();

// 3

// ---------------------------------------------------- question
// What will this return
// console.log(typeof(typeof(1)))

// string

// ---------------------------------------------------- question
// What will the output by?
var hero = {
    _name:"John Doe",
    getSecretIdentity: function() {
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

// console.log(stoleSecretIdentity());
// undefined
// console.log(hero.getSecretIdentity());
// "John Doe"

// ---------------------------------------------------- question
// Flatten this array
let congestedArray = [[1,2,[3,[5]]],4]

// console.log(Array.isArray(congestedArray[0]));
// congestedArray = congestedArray.flat();
// console.log(congestedArray);
// console.log(Array.isArray(congestedArray[0]));
// congestedArray = congestedArray.flat();
// console.log(congestedArray);
// console.log(Array.isArray(congestedArray[0]));
// congestedArray = congestedArray.flat();
// console.log(congestedArray);
// console.log(Array.isArray(congestedArray[0]));
// congestedArray = congestedArray.flat();
// console.log(congestedArray);

function flattenArray1 (array) {
    const returnArray = array.reduce((acc, current) => {
        if (Array.isArray(current)) {
            acc = acc.concat(flattenArray1(current));
        } else {
            acc.push(current);
        }
        return acc;
    }, []);

    return returnArray;
}

console.log(flattenArray1(congestedArray));


function flattenArray2 (array) {
    const newArray = array.reduce((acc, current) => {
        if (Array.isArray(current)) {
            // acc = acc.concat(current.flat());
            acc += 1;
            acc = acc + flattenArray2(current)
        } else {
            console.log("")
            // acc.push(current);
        }
        return acc;
    }, 0);
    return newArray;
}

console.log(congestedArray.flat(flattenArray2(congestedArray)));