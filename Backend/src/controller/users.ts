import { Request,Response } from "express-serve-static-core";
import {CreateUserDto} from '../dtos/createuser.dto'
import {userqueryparams} from '../types/query-params'
import {User} from '../types/response'
import session from "express-session";
export function getUser(req:Request,res:Response){
   return res.send("user")
}
// request type can be set by generic          body query                                       Response type
export function getUserById(req:Request<{id:string},{},CreateUserDto,userqueryparams>,res:Response<User>){
    // console.log(req.body.email,req.body.password,req.body.username)
    // console.log(req.query.loginAfterCreate)
    //console.log(req.params.id)
    console.log(req.customfield)
    return res.send({
        id:"dd mherbfer",
        email:"nvjrehr",
        username:"ldjnvrjeh"
    })
}