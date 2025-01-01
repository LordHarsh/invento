"use client";
import { ThemeProvider } from "@/components/theme-provider";
import {
  Geist,
  Geist_Mono,
} from "next/font/google";
import "@/app/globals.css";
// import { useState } from 'react';
// import { AuthProvider } from '@/context/authContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  // useEffect(() => {
  //   appwriteAuthService.isLoggedIn()
  //     .then(setAuthStatus)
  //     .finally(() => setLoader(false));
  // }, []);


  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-black via-gray-900 to-black`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <AuthProvider value={{ authStatus, setAuthStatus }}> */}
              <main className="relative z-10">
                {children}
              </main>
          {/* </AuthProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}