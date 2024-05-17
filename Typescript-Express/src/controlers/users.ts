import { Request,Response } from "express-serve-static-core";
import { createUserQuery, createUserResponse, user } from "../dtos/type";

export function users(req:Request,res:Response)
{
    res.json({
        message:"users"
    })
}

export function usersById(req:Request,res:Response){
    res.json({
        message:"usersById"
    })
}

export function createUser(req:Request<{},{},user,createUserQuery>,
    res:Response<createUserResponse>):Response
{
    return res.status(400).json({
        id:89,
        name:"pruthi",
        email:"pruthi@gmail"
   })
}