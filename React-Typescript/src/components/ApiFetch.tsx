import React,{useState,useEffect} from "react"
import axios from 'axios'
interface TodoType{
    completed:boolean;
    id:number;
    title:string; 
    userId:number
}
const ApiFetch=():React.JSX.Element=>{
   const [Todos,setTodos]=useState<TodoType[]>([])
   useEffect(()=>{
     (async ()=>{
       const response=await axios.get(`https://jsonplaceholder.typicode.com/todos`)
       const data:TodoType[]=await response.data
       setTodos(data)
     })()
   },[])
   console.log(Todos[0])
   return (
    <>
    <h3>Api Fetch</h3>
    {
       Todos.length>0&&Todos.map((todo:TodoType)=>{
            return <h4 key={todo.id}>{todo.title}</h4>
        })
    }
    </>
   )
}

export default ApiFetch