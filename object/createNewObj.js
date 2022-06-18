let Person = function (first, last, age) {
    this.first = first
    this.last = last
    this.age = age
}

const fullName = function (state, city) {
    console.log(this.first, this.last, this.age, state, city)
}

person1 = new Person("amon", "Omeron", 3)

// console.log(person1)

Function.prototype.mybind = function (...args1) {
    let Obj = this;
    let params = args1.splice(1)
    return function(...args2) {
        Obj.apply(args1[0],[...params, ...args2])
    }
}

let callname = fullName.mybind(person1, "georgia")
callname("kennesaw")
callname("atlanta")

