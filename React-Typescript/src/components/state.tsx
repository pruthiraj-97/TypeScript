import React, { useState } from "react"
import { Link } from "react-router-dom"
interface MyLink{
    id:number;
    url:string;
    text:string
}

const navLinks: MyLink[] = [
    {
      id: 1,
      url: 'https://reactjs.org',
      text: 'react docs',
    },
    {
      id: 2,
      url: 'https://reactrouter.com',
      text: 'react router docs',
    },
    {
      id: 3,
      url: 'https://reacttraining.com',
      text: 'react training',
    },
  ];
  
const State=():React.JSX.Element=>{
    const [links,setLinks]=useState<Array<MyLink>>(navLinks)
    return (
        <>
         <div>state in typescript</div>
         {
            links.length>0 && links.map((link)=>{
                return (
                    <Link key={link.id} to={link.url}>{link.text}</Link>
                )
            })
         }
        </>
    )
}
export default State