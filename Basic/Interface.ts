// interface
interface User{
    readonly DbId:string,
    email:string,
    userId:number,
    readonly googleId?:string,
    startTrail():string,
    getCoupon(couponname:string):string
}

interface User{
    githubToken:string
}
// inharitance in interface
interface Admin extends User{
   role:"admin"|"ta"|"learner"
}

const rahul:User={
    DbId:"dfuhreuifheruhf",
    email:"rahul@gmail.com",
    userId:45745,
    githubToken:"dbnfjhfv",
    startTrail:()=>{
        return "trail start"
    },
    getCoupon:(couponname:'pruthi10')=>{
      return couponname
    },
}