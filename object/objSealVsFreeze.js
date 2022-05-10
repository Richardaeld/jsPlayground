// Seal vs freeze vs deep freeze

let obj = {
    x: 1,
    y: 1,
    a:{
        b:{
            c:1
        }
    }
};

// Freeze Cements all values and configurability in place. Freeze CANNOT be undone.
let obj1 = {
    x: 2,
    y: 4,
    a:{
        b:{
            c:6
        }
    }
};

// This is a shallow freeze and only effects the first level
console.log('Before shallow freeze', obj1.x);
Object.freeze(obj1);
obj1.x = 16;
console.log('After shallow freeze', obj1.x);

console.log('Before c change', obj1.a.b.c);
obj1.a.b.c = 0;
console.log('After c change',obj1.a.b.c);

// Deeper freeze at appropriate level
Object.freeze(obj1.a.b);
obj1.a.b.c = 27;
console.log('After Deeper freeze, c change',obj1.a.b.c);



// Seal prevents new properties from being added.removed and makes all existing properties as non-configurable.
// However values of existing propertites can be changed, as long as they are writable.

let obj2 = {
    x: 12,
    y: 13,
    a:{
        b:{
            c:14
        }
    }
};

// Object.seal(obj2)
obj2.z = 15;
console.log('After Seal', obj2);

delete obj2.x;
obj2.y = 313;
console.log('After Seal and delete and change', obj2);
