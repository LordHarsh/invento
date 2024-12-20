"use client";

import { navLinks } from "@/constant/Constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
    openNav: () => void;
}

const Nav = ({openNav}:Props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if(window.scrollY >= 90)
                setNavBg(true);
            if(window.scrollY < 90)
                setNavBg(false);
        };

        window.addEventListener('scroll', handler);

        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <div 
            className={`fixed 
            ${navBg 
                ? "bg-white dark:bg-gray-900 shadow-md dark:shadow-lg" 
                : "bg-transparent dark:bg-transparent"
            } 
            w-full transition-all duration-200 h-[12vh] z-[1000]`}
        >
            <div className="flex items-center h-full justify-between w-[90%] xl:w[80%] mx-auto">
                {/* Logo with dark mode styling */}
                <h1 
                    className="text-xl md:text-2xl font-bold 
                    text-gray-900 dark:text-white"
                >
                    <span className="text-3xl md:text-4xl text-purple-700 dark:text-purple-500">I</span>
                    vento
                </h1>

                {/* NavLinks with dark mode styling */}
                <div className="hidden lg:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link 
                            href={link.url} 
                            key={link.id}
                            className="hover:text-purple-700 dark:hover:text-purple-500 
                            transition-colors"
                        >
                            <p 
                                className="nav__link 
                                text-gray-800 dark:text-gray-300"
                            >
                                {link.label}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Buttons with dark mode styling */}
                <div className="flex items-center space-x-4">
                    <button 
                        className="md:px-8 md:py-2.5 px-6 py-2 
                        text-white font-semibold text-base 
                        bg-purple-700 hover:bg-purple-900 
                        dark:bg-purple-600 dark:hover:bg-purple-700 
                        transition-all duration-200 rounded-full"
                    >
                        Create Now
                    </button>
                    <HiBars3BottomRight 
                        onClick={openNav} 
                        className="w-8 h-8 cursor-pointer 
                        text-black dark:text-white lg:hidden"
                    />
                </div>
            </div>
        </div>
    )
}

export default Nav;