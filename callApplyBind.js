let name = {
    firstName: "Amon",
    lastName: "Omeron",
    printFullName: function() {
        console.log(this.firstName, this.lastName);
    }
}

let printFullName1 = function(hometown, state) {
    console.log(this.firstName, this.lastName + " from " + hometown + " , " + state);
}


name.printFullName();


let name2 = {
    firstName: "Nanon",
    lastName: "Dubberon",
}


// function barrowing
name.printFullName.call(name2)
printFullName1.call(name, "Meeryetta", "hotlanta")
printFullName1.apply(name2, ["Meeryetta", "hotlanta" ])


// bind method

let printFullName2 = printFullName1.bind(name, "Meeryetta", "hotlanta")
printFullName2()