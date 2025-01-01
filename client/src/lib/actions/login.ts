"use server";

import { login } from '@/appwrite/auth/authService';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const loginFormSchema = z.object({
    email: z.string({
        required_error: "Email is required",
        message: "Invalid email address",
    }).email(
        { message: "Invalid email address" }
    ),
    password: z.string({
        message: "Password is required",
    })
});


export const loginAction = async (prevState: any, formData: FormData) => {
    const formEntries = Object.fromEntries(formData.entries());
    const validatedData = loginFormSchema.safeParse(formEntries);
    console.log(validatedData.error);
    if (!validatedData.success) {
        return {
            success: false,
            message: validatedData.error.errors.map(err => `${err.path.join('.')}: ${err.message}`).join(', '),
        }
    }
    const { email, password } = validatedData.data;

    const res = await login({ email, password });
    if (res?.success) {
        redirect('/dashboard');
    }
    return {
        success: false,
        message: 'An error occurred during signup',
    }
}
