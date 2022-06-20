// Closure

function AddWithClosure (num1) {
    return function (num2) {
        return num1 + num2;
    }
}

const outsideFunction = AddWithClosure(10);
console.log(outsideFunction(25))


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
    return console.log(x);
}

// console.log(foo());
