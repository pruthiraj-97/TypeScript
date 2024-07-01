interface User{
    name:string,
    email:string,
    password:string,
    contactNumber:number
}
// remove the filed we given
const newUser:Omit<User,'email'|'name'>={
  password:'pruthi',
  contactNumber:25265632
}
console.log(newUser)
// make every field optional
const newUser1:Partial<User>={
    email:'pruthiraj'
}
console.log(newUser1)
// make specific key-value
const newUser2:Record<string,number>={
    'user1':12,
    'user2':23
}
console.log(newUser2)
// mendatory to select
const newUser3:Pick<User,'email'>={
    email:'panada@gamil.com'
}
console.log(newUser3)
// make every field readonly
const newuser4:Readonly<User>={
    name:'pruthi',
    email:'pruthiraj',
    password:'pruthiraj',
    contactNumber:387436
}
type dataType=string | number | boolean
// exclude which type
let newData:Exclude<dataType,number>=true
newData='Typescript'
console.log(newData)

//KeyOf key word
interface Person{
    name:string,
    age:number
}

function KeyOfFuc(person:Person,otherData: keyof Person){
   console.log(person,otherData)
}
const newPerson:Person={
    name:'TS',
    age:290
}
const data="hdhfde"
KeyOfFuc(newPerson,"name")

type funcType=(value:number)=> number
const newFunction:funcType=(value)=>{
    return value
}

console.log(newFunction(455))