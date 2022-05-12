// set define properties and change writeable status
const profile = {
    name: 'Channel JS Tricks',
    value: 4,
    con: 'nothing',
    pro: 'everything',
};

Object.defineProperty( profile, 'con', {
    writable: false
})

Object.defineProperty( profile, 'pro', {
    writable: false
})

Object.defineProperty( profile, 'age', {
    value: 14,
    writable: false
})


profile.name = "new";
profile.age = 89;
profile.pro = 'Some  false string';
profile.con = 'another false string';

console.log(profile);