// default dataType is never
const users:string[]=[]
users.push("pruthi")
users.push("rahul")

const heroPower:Array<number>=[] // standard method
heroPower.push(1)

type User={
    name:string,
    email:string,
    age:number
}

const allUser:Array<User>=[]
allUser.push({name:"pruhi",email:"pruthi",age:20})

function array(values:Array<User>):void{
   values.forEach((v)=>{
      console.log(v)
   })
}

array(allUser)