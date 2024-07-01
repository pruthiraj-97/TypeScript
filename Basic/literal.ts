//literal use to specify the exact value of a variable

let changingString:"ts"="ts"
function test(name:"js"|"ts"|"py",email:string):void
{
    console.log(name,email)
}
test("js","rughreug")
// test("java","djgruehg")

type Options=number

function AreaCalculate(width:Options,height:number|"height"){
    console.log(width,height)
}
AreaCalculate(20,30)
AreaCalculate(10,"height")
// AreaCalculate(30,"hfuefhg")