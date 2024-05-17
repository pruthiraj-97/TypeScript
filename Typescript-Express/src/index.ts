import express,{Request,Response} from 'express'
import userRouter from './router/user'
const app=express()
const PORT=3000
app.use('/api/users',userRouter)
app.get("/",(req:Request,res:Response)=>{
    res.send('Typescript-Express')
})
app.listen(PORT,()=>console.log(`server is listening on port ${PORT}`))