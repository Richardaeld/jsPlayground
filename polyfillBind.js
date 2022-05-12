let name = {
    firstName: "Amon",
    lastName: "Omeron",
    printName: function () {
        console.log(this.firstName, this.lastName)
    }
};


let printFullName = function(hometown, city, country) {
    console.log(this.firstName, this.lastName + " , " + hometown + " and " + city + " , " + country);
};


let printMyName = printFullName.bind(name);
printMyName();


Function.prototype.mybind = function(...args) {
    let obj = this,
        params = args.slice(1)
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}


let printMyName2 = printFullName.mybind(name, "Meeryetta");
printMyName2("something2", "country");