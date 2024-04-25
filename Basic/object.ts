const User={
    name:"rahul",
    email:"rahul@gmail.com",
    isActive:true
}

function createCourse():{name:string,price:number}
{
    return {
        name:"react.js",
        price:450
    }
}

// type User={
//     name:string,
//     email:string,
//     age:number
// }
// function createUser(user:User):void{
//    console.log(user.name,user.email)
// }
// createUser({name:"pruthiraj",email:"pruthi",age:20})
// custom type
type User={
    readonly _id:string
    name:string
    email:string
    age:number
    creditCart?:number // may or may not present
}

function createUser(user:User):User{
    //user._id="dngruehferuhf"
    return user
}

const newUser:User={
    _id:"dnfjrngurjg",
    name:"pruthiraj",
    email:"pruthi@gmail.com",
    age:20,
}
createUser(newUser)
type cartNumber={
    cartnumber:number
}

type cartDate={
    cartdate:string,
    createDate:string
}

type cartDetails=cartNumber & cartDate

const newCart:cartDetails={
   cartnumber:6667,
   cartdate:"fvmfiig",
   createDate:"fvfvgrvgt"
}