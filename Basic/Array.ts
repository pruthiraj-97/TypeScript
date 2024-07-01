// default dataType is never
const users:string[]=[]
users.push("pruthi")
users.push("rahul")

const heroPower:Array<number>=[] // standard method
heroPower.push(1)

type Useri={
    name:string,
    email:string,
    age:number
}

const allUser:Array<Useri>=[]
allUser.push({name:"pruhi",email:"pruthi",age:20})

function array(values:Array<Useri>):void
{
   values.forEach((v)=>{
      console.log(v)
   })
}

array(allUser)