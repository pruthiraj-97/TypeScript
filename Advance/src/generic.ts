let newArray:Array<number>[]=[]
let sArray:Array<string>[]=[]

function identityOne(val:boolean|number):boolean|number{
     return val
}

function identityTwo(val:any):any{
     return val
}

function identityThree<T>(val:T):T{
    return val
}
identityThree(true)
interface Bootle{
    brand:string,
    price:number
}


function identityFour<Bootle>(val:Bootle):Bootle{
    return val
}

function getSearchProduct<T>(products:T[]):T{
    return products[0] // return type value
}

const getSearchMoreProduct=<T>(products:T[]):T=>{
    return products[1]
}

const getArray=<T,>(products:Array<T>):T=>{
   return products[1]
}

const a:number[]=[1,2,3,4]
console.log(getArray(a))
interface DataBase{
    connection:string,
    username:string,
    password:string
}

// U type must be equal with DataBase
function anotherFunction<T,U extends DataBase>(valOne:T,valTwo:U):object{
    return {
        valOne,valTwo
    }
}

anotherFunction(1,{
    connection:"djngrhg",
    username:"dnvrjegnr",
    password:"rgjrt"
})

class variable<T>{
    public cart:T[]=[]

    addToCart(product:T):void{
        this.cart.push(product)
    }
}

const V=new variable()
      V.addToCart(3)