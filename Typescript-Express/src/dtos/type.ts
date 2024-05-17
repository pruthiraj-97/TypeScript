export interface user{
    username:string,
    email:string,
    password:string
}
export interface createUserQuery{
    name:string,
    email:string,
    password:string
}

export interface createUserResponse{
   id:number,
   name:string,
   email:string
}