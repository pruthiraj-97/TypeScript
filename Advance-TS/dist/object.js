"use strict";
// remove the filed we given
const newUser = {
    password: 'pruthi',
    contactNumber: 25265632
};
console.log(newUser);
// make every field optional
const newUser1 = {
    email: 'pruthiraj'
};
console.log(newUser1);
// make specific key-value
const newUser2 = {
    'user1': 12,
    'user2': 23
};
console.log(newUser2);
// mendatory to select
const newUser3 = {
    email: 'panada@gamil.com'
};
console.log(newUser3);
// make every field readonly
const newuser4 = {
    name: 'pruthi',
    email: 'pruthiraj',
    password: 'pruthiraj',
    contactNumber: 387436
};
// exclude which type
let newData = true;
newData = 'Typescript';
console.log(newData);
function KeyOfFuc(person, otherData) {
    console.log(person, otherData);
}
const newPerson = {
    name: 'TS',
    age: 290
};
const data = "hdhfde";
KeyOfFuc(newPerson, "name");
const newFunction = (value) => {
    return value;
};
console.log(newFunction(455));
