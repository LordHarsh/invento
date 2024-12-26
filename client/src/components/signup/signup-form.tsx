"use client";
import React, { useState } from "react";
// import { Client, Account, ID } from "appwrite";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import appwriteAuthService from "@/appwrite/auth/authService";
import useAuth from "@/context/useAuth";
import { OAuthProvider } from "node-appwrite";
import appwriteAdminAuthService, { createOAuth2Session } from "@/appwrite/auth/adminAuthService";

// Initialize Appwrite Client
// const client = new Client();
// client
//   .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || '')
//   .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '');

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setAuthStatus } = useAuth();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate form data
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    console.log(formData);

    try {
      const userData = await appwriteAuthService.createNewUserAccount({
        name: `${formData.firstname} ${formData.lastname}`,
        email: formData.email,
        password: formData.password,
      })
      console.log(userData);
      if (userData) {
        setAuthStatus(true);
        router.push('/dashboard');
      }


    } catch (error: unknown) {
      console.error(error);
      setError((error as Error)?.message || 'An error occurred during signup');
    } finally {
      setLoading(false);
    }
  };

  // Social login handlers
  // const handleGithubLogin = async () => {
  //   try {
  //     const account = new Account(client);
  //     await account.createOAuth2Session(
  //       'github', 
  //       `${window.location.origin}/dashboard`, 
  //       `${window.location.origin}/signup`
  //     );
  //   } catch (err: any) {
  //     setError(err.message || 'GitHub login failed');
  //   }
  // };

  const handleGoogleLogin = async () => {
    console.log('Google login');
    try {
      const redirectedUrl = await createOAuth2Session(OAuthProvider.Google);
      console.log(redirectedUrl);
      // Open redirect URL in window
      window.open(redirectedUrl, '_self');
    } catch (error) {
      setError((error as Error)?.message || 'An error occurred during signup');
    }
  };

  // const handleLinkedInLogin = async () => {
  //   try {
  //     const account = new Account(client);
  //     await account.createOAuth2Session(
  //       'linkedin', 
  //       `${window.location.origin}/dashboard`, 
  //       `${window.location.origin}/signup`
  //     );
  //   } catch (err: any) {
  //     setError(err.message || 'LinkedIn login failed');
  //   }
  // };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Invento
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-cyan-500 dark:text-cyan-400 font-medium hover:underline"
        >Login here</Link>
      </p>

      {error && (
        <div className="text-red-500 text-sm mb-4">
          {error}
        </div>
      )}

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Durden"
              type="text"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="confirmPassword">Confirm your password</Label>
          <Input
            id="confirmPassword"
            placeholder="••••••••"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Signing up...' : 'Sign up'} &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            type="button"
            // onClick={handleGithubLogin}
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            type="button"
            // onClick={handleLinkedInLogin}
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          >
            <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Linkedin
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

// Previous BottomGradient and LabelInputContainer components remain the same

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
