import {  z } from 'zod'
import {fromZodError } from 'zod-validation-error'
enum Hobbies{
  cricket,
  football,
  hockey
}

const hobbies=['cricket','football','hockey'] as const // value will not further change
const userSchema=z.object({
  name:z.string(),
  email:z.string()
         .min(10),
  password:z.string(),
  isProgrammer:z.boolean().nullish(), // this is for undfine and null
  // isCoder:z.boolean().default(true),
  isCoder:z.literal(true),
  text:z.string().optional(),
  // hobby:z.nativeEnum(Hobbies)
  hobby:z.enum(hobbies),
  cords:z.tuple([z.number(),z.number(),z.number()]).rest(z.string()),
  id:z.union([z.number(),z.string()])
}).passthrough()

type userType=z.infer<typeof userSchema>
const user={
  name:"pruthi",
  email:"pruthi@gmail",
  password:"pruthi",
  isProgrammer:null,
  isCoder:true,
  hobby:"hockey",
  id:'23',
  cords:[1,2,3,"hb","tf"]
}
const user1={
  name:"pruthi",
  email:"pruthi@gmail"
}
const result=userSchema.safeParse(user) // for validation
console.log(userSchema.partial().parse(user1)) // every think optional
console.log(result)

const Schema=z.record(z.string(),z.number()) // cheak for value type in object
const newUser={
  name:"pruthi",
  email:"pruthi@gmail",
}
const result1=Schema.safeParse(newUser)
if(!result1.success){
  console.log(fromZodError(result1.error))
}