const person1 = {
    first: "james",
    last: "smith",
    // fullName: function() {
    //     console.log(this.first, this.last)
    // }
}

const person2 = {
    first: "John",
    last: "Doe",
    // fullName: function() {
    //     console.log(this.first, this.last)
    // }
}

const fullName = function(age, city, state) {
        console.log(this.first, this.last, age, city, state)
    }

// person1.fullName()
// person2.fullName()
fullName.call(person1, "something", "something", "etc...")
fullName.apply(person2, ["something", "something", "etc..."])


const runBind = fullName.bind(person1, "something", "something", "etc...")
runBind()

let arr = [];
Array.prototype.laugh = function () {
    console.log("haha")
}

arr.laugh()

Function.prototype.newBind = function(...args1) {
    const obj = this;
    let params = args1.splice(1)
    return function (...args2) {
        obj.apply(args1[0], [...params, ...args2])
    }
}

const runCustomBind = fullName.newBind(person1, 25)
runCustomBind("City", "Westward")
