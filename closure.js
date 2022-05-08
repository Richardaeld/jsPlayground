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

console.log(person.getName());


// X persists after addX is called 
function addX(x) {
    return function (y) {
        return x + y
    }
}

const addNum = addX(10);

console.log(addNum(5))