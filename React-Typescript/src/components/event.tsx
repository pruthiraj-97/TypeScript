import React, { useState } from "react"
function EventReact():React.JSX.Element
{
    const [name,setName]=useState<string>("")
    const [email,setEmail]=useState<string>("")
    const [password,setPassword]=useState<string>("")
    function HandleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log(e)
        console.log(name,email,password)
    }

    return (
        <>
         <form action=""onSubmit={HandleSubmit} >
            <input type="text" placeholder="enter name"
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}
            />
            <br />
            <input type="text" placeholder="enter email"
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)}
            />
            <br />
            <input type="text" placeholder="enter password"
             onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}
            />
            <br />
            <button type="submit">submit</button>
         </form>
        </>
    )
}
export default EventReact