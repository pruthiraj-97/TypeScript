// union data type
let score:number|string|boolean|object=33
score="typescript"
score=false
score={}

type Admin={
    name:string
    id:number
}
type User={
    username:string
    id:number
}

let hitesh:User|Admin={
   name:"pruthi",
   id:85
}
hitesh={
    username:"dnirjgtr",
    id:90
}

function getDbId(id:number|string):number|string
{  
   if(typeof id==="string"){
       id.toLowerCase()
   }
   return id
}
getDbId("dhruighruhfreu")
// array
const data:(number|string|boolean)[]=[1,2,3,"4",false]
let pi:3.14=3.14 //asigning constant value

