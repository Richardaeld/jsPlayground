let name1 = {
    first: "amon",
    last: "omeron",
    // printName: function () {
    //     return console.log(this.first, this.last)
    // }
}

let name2 = {
    first: "Ray",
    last: "McAuthor",
    // printName: function () {
    //     return console.log(this.first, this.last)
    // }
}

let printName = function (age, city, state) {
    return console.log(this.first, this.last, age, city, state)
}

printName.call(name1, 26, "atlanta", "geogia")

Function.prototype.myBind = function (...args1) {
    let obj = this;
    let params = args1.slice(1);
    return function (...args2) {
        obj.apply(args1[0], [...params, ...args2])
    }
}

let speakNameAndLoc = printName.myBind(name1);
speakNameAndLoc(47, "Woodstock", "Georgia");


// name1.printName()
// name2.printName()



























