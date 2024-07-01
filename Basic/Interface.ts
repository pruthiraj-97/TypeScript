// interface
interface UserI{
    readonly DbId:string,
    email:string,
    userId:number,
    googleId?:string, // it is optional may not be present
}

// interface User{
//     githubToken:string
// }
// inharitance in interface

interface AdminI extends UserI{
   role:"admin"|"ta"|"learner"
}
const rahul:AdminI={
    DbId:"ugfuiewfh",
    email:"dhgergj",
    userId:10,
    googleId:"dshuherg",
    role:"admin"
}
