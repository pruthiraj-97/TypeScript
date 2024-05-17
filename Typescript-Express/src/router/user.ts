import { Router } from "express";
import { users ,usersById,createUser } from "../controlers/users";
const router=Router()
router.get('/',users)
router.get('/:id',usersById)
router.post('/createuser',createUser)
export default router