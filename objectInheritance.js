class User {
    constructor (email, name) {
        this.email=email;
        this.name=name;
        // this.score=score;
    }
    login(){
        console.log(this.email, ' just logged in')
        return this
    }
    logout(){
        console.log(this.email, ' just logged out')
        return this
    }
    // updateScore(){
    //     this.score++;
    //     console.log(this.email, 'score is now', this.score);
    //     return this
    // }
}

class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

var userOne = new User('something@gmail.com', 'Sim Something');
var userTwo = new User('test123@gmail.com', 'Tim Tesla');
var userThree = new User('lummux@gmail.com', 'Lee lemon');
var userAdmin = new Admin('admin@gmail.com', 'Adam Smith')

var users = [userOne, userTwo, userThree, userAdmin]

// userAdmin.deleteUser(userTwo)
// userAdmin.deleteUser()
// userOne.logout()

console.log("users", users)