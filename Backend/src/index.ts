import express,{Request,Response} from 'express'
import userRouter from './router/users'
const app=express()
const PORT:number=4000
app.use('/api/users',userRouter)
app.get('/',(req,res)=>{
    res.send('hello ts')
})
app.get('/user',(req:Request,res:Response)=>{
    res.send('user')
})
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})