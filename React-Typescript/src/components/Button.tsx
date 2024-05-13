import React from "react";
import { useState } from "react";
// React Functional component which must be export
interface MyButtonProps{
    text:string|number;
    onClick?:()=>void
}

interface Book{
    name:string;
    price:number
}
const MyButton:React.FC<MyButtonProps>=(props)=>{
    const [count,setCount]=useState<number>(0)
    const [book,setBook]=useState<Book|object>({})
    const [email,setEmail]=useState<string|undefined>("")
    const [password,setPassword]=useState<string>("")
    function Handlechange(e:React.ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value)
    }
    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log(e)
    }
    return (
        <>
        <button>submit</button>
        <h1>{props.text}</h1>
        <div>
            <button onClick={()=>setCount(count+1)}>{count}</button>
        </div>
        <div>
          <form action="" onSubmit={handleSubmit}>
           <input type="text" placeholder="enter email"
                onChange={Handlechange}
            />
            <input type="text" 
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}
            />
            <button type="submit">submit</button>
          </form>
            <h1>{email}</h1>
        </div>
        </>
    )
}

export default MyButton