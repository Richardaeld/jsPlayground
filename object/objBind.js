// getX returns undefined, make it return 1(value of x)
// Problem
const objProb = {
    x:1,
    getX(){
        const inner = function () {
            console.log(this.x)
        }
        inner();
    }
};

objProb.getX();


// Solution
const objSol1 = {
    x:1,
    getX(){
        const inner = function () {
            console.log(this.x)
        }
        inner.bind(this)();
    }
};

objSol1.getX();


// Solution 2
const objSol2 = {
    x:1,
    getX(){
        const inner = function () {
            console.log(this.x)
        }
        inner.bind(objSol2)();
    }
};

objSol2.getX();