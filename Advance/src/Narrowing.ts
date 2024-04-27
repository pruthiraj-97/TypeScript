function detectType(val:(number|string)){
    if(typeof val=='number'){
          return val+3
    }else{
        return val.toUpperCase()
    }
}

function provideId(id:(string|null)){
   if(!id){
        console.log("please provide id")
        return 
   }
   id.toLowerCase()
}

function printAll(strs:string|string[]|null){
    if(strs){
        if(typeof strs=='object'){
            for(const s of strs){
                console.log(s)
            }
        }else if(typeof strs==='string'){
            console.log(strs)
        }
    }
}

interface User{
    name:string,
    password:string
}

interface Admin{
    name:string,
    password:string,
    isAdmin:boolean
}

function cheakUser(account:(Admin|User)){
    if("isAdmin" in account){ // is this property is 
        // present in this account
        return account.isAdmin
    }else{
        return "This is admin account"
    }
}

// instanceOf narrowing

function logValue(x:(Date|string)){
    if(x instanceof Date){
       return x.toUTCString()
    }else{
        return x.toLowerCase()
    }
}

type fish={
    swim:()=>void
}
type bird={
    fly:()=>void
}

function isFish(pet:(fish|bird)){
   return (pet as fish).swim!==undefined
}

//Discriminated union
interface Circle{
    kind:"circle",
    radius:number
}

interface Square{
    kind:"square",
    side:number
}

interface Rectangle{
    kind:"rectangle",
    length:number,
    width:number
}
type Shape=Circle|Square|Rectangle

function getTrueShape(shape:Shape){
    if(shape.kind=='circle'){
        console.log("circule type")
    }else{
        console.log("square type")
    }
}

function getArea(shape:|Shape){
    switch (shape.kind) {
        case 'circle':
            return Math.PI*shape.radius
            
        case 'square':
            return shape.side*shape.side
        case 'rectangle':
            return shape.width*shape.length
        default:
            const _defaultforshape:never=shape
            return _defaultforshape
    }
}