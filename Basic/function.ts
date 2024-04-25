function addTwo(num:number): number
{
    return num+2
}
function getUpper(val:string):string
{
    return val.toLowerCase()
}
function signUpUser(name:string,password:string,email:string):object{
    return {
        name,password,email
    }
}
const loginUser=(email:string,password:string,isPaid:boolean=false):object=>
    {
   return {
    email,password
   }
}
getUpper("pruthi")
signUpUser("pruthi","pruthi","pruthi@gmail.com")
loginUser("js","ts")
console.log(addTwo(5))

const value=[1,2,3,90]
value.map((v:number):void=>{
    
})
function handleError(errorMsg:string): never{
       throw new Error(errorMsg)
}
