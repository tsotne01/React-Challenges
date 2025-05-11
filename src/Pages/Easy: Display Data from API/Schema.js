import {z} from "zod";


export const loginSchema = z.object({
    email: z.string().email({
        message: "Invalid email"
    }).min(1,{
        message: "Email is required"
    }),
    password: z.string().min(6,{message:"Min length of password must be 8 symbols"})
})