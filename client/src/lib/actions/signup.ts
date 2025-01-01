"use server";

import { signup } from '@/appwrite/auth/authService';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const signUpFormSchema = z.object({
    firstName: z.string({
        message: "First name is requiredHa"
    }),
    lastName: z.string({
        message: "Last name is required"
    }),
    email: z.string({
        required_error: "Email is required",
        message: "Invalid email address",
    }).email(
        { message: "Invalid email address" }
    ),
    password: z.string({
        required_error: "Password is required",
        message: "Password must be at least 8 characters long",
    }).min(8, {
        message: "Password must be at least 8 characters long"
    }),
    confirmPassword: z.string(
        { required_error: "Please confirm your password" }
    ),
});


export const signupAction = async (prevState: any, formData: FormData) => {
    const formEntries = Object.fromEntries(formData.entries());
    const validatedData = signUpFormSchema.safeParse(formEntries);
    console.log(validatedData.error);
    if (!validatedData.success) {
        return {
            success: false,
            message: "Invalid form data",
            error: validatedData.error.errors.map(err => `${err.path.join('.')}: ${err.message}`).join(', '),
        }
    }
    const { firstName, lastName, email, password, confirmPassword } = validatedData.data;
    if (password !== confirmPassword) {
        return {
            success: false,
            message: 'Passwords do not match',
            error: 'Passwords do not match'
        }
    }
    const res = await signup({ firstName, lastName, email, password });
    if (res?.success) {
        redirect('/dashboard');
    }
    return {
        success: false,
        message: 'An error occurred during signup',
        error: 'An error occurred during signup',
    }
}
