import { z } from "zod";

const forgetPassqwordValidation = z.object({
    body: z.object({
        email: z.string({required_error: 'User email is required'})
    })
})
const resetPassqwordValidation = z.object({
    body: z.object({
        email: z.string({required_error: 'User email is required'}),
        newPassword: z.string({required_error: 'User password is required'})
        
    })
})

export const authValidaions = {
    forgetPassqwordValidation,
    resetPassqwordValidation
}