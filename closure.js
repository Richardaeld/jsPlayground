// Closure is lexical scope. This allows JS to see above its current scope to find veriables.
// Closure is the ability of lexical scope and the ability for variables to persist after a their function has been called/created


// Example 1 personName persists after function is called/created
function makePerson(name) {
    const personName = name;
    return {
        getName() {
            return personName;
        },
    };
};

const person = makePerson("Spengler")
// console.log(person.getName());



// X persists after addX is called 
function addX(x) {
    return function (y) {
        return x + y
    }
}

const addNum = addX(10);
// console.log(addNum(5))



function timeOut () {
    var i = 1;
    setTimeout(() => {
        console.log(i)
    }, 2000);
    console.log("i print first")
    i = 2
}

// timeOut()


secondsArray = [1,2,3,4,5,6]
function secondCalls() {
    const funcX = function (x) {
        setTimeout(() => {
                console.log(x)
            }, x * 1000)
    }

    for (var i = 0; i <= 5; i++) {
        funcX(i)
        // setTimeout(() => {
        //     console.log(i)
        // }, i * 1000)
    }
}
secondCalls();

// function secondCalls(num) {
//     setTimeout(() => {
//         console.log(num)
//     }, num * 1000)
// }

// secondsArray.map(x => secondCalls(x))