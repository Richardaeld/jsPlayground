// set define properties and change writeable status
let profile = {
    name: 'Channel JS Tricks',
    value: 4,
};


Object.defineProperty( profile, 'age', {
    value: 14,
    writable: false
})


profile.name = "new";
profile.age = 89

console.log(profile)