// When an object, array, function ,etc... is creatd JS attaches an additional object to this.
// This object is prototype inheritence and this is how arrays, functions, objects, recieve the ability to use
// build in functions like filter, map, length, etc...

let array = ["Amon", "Omron"];
let object = {
    name: "Amon",
    city: "Dublin",
    getIntro : function () {
        console.log(this.name, "from", this.city)
    }
}

// object.getIntro();

// Prototype Chain

array.__proto__
// is same as
Array.prototype

array.__proto__.__proto__
// is same as
Object.prototype

array.__proto__.__proto__.__proto__
// is null

// Have ability to add onto the prototype chain
Array.prototype.myBind = function () {
    console.log("I am Here!")
}

array.myBind();