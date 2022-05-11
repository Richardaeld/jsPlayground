
// Function Statement / Declaration
function iAmStatement() {
    console.log("I am a function statement")
}


// Function Expression / Anonymous Function Expression
const iAmAnonExpression = function () {
    console.log("I am an Anonymousa function expression")
}


// Function Expression / Named Function Expression
const iAmNamedExpression = function xyz () {
    console.log("I am a named function expression")
}


// Difference between Function Statement and Function Expression
//
// Function Statement is hoisted


// Function Declaration is Function Statement



// Anonymous Function
//
// Function without a name
// function () {
//     console.log("I am anonymous function")
// }
// This will throw a syntax error
// Anonymous function must be used as a IIF Immediately invoked function
(function () {
    console.log("I am anonymous function")
})();



// Parameters and arguments
function paraArgs (parameter1, parameter2, param1, param2) {
    console.log("I have parameters")
}

paraArgs(arguments1, arguemnts2, args1, args2)



// First Class Functions
//
// The Ability to use functions as values.
// Ability of functions to be passed as arguments and functions to be returned

