import express from 'express'
import { getUser,getUserById } from '../controller/users'
const router=express.Router()
router.get('/getuser',getUser)
router.get('/getuser/:id',getUserById)
export default router

