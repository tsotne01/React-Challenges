import { z } from "zod";

export const formWithMutationSchema = z.object({
    name: z.string().min(3,{message:"name must be at least 3 characters"}),
    completed: z.boolean(),
})