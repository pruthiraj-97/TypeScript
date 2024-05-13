import React from "react"
interface PropsInterface{
    name:string;
    count:string;
    onChange?:()=>void
}

const Props=(props:PropsInterface):React.JSX.Element=>{
   console.log(props.count,props.name)
   return (
    <>
     <div>props</div>
    </>
   )
}
export default Props