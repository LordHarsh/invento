"use client";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/constant/Constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90)
                setNavBg(true);
            if (window.scrollY < 90)
                setNavBg(false);
        };

        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <div
            className={`fixed w-full transition-all duration-300 h-[12vh] z-[1000]
            ${navBg
                    ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg dark:shadow-gray-800/30"
                    : "bg-transparent dark:bg-transparent"
                }`}
        >
            <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">

                <Link href={'/'}>
                    {/* Logo with enhanced styling */}
                    <h1
                        className="text-xl md:text-2xl font-bold 
                    text-gray-900 dark:text-white 
                    hover:text-purple-700 dark:hover:text-purple-500 
                    transition-colors duration-300"
                    >
                        <span className="text-3xl md:text-4xl 
                    bg-gradient-to-r from-purple-600 to-purple-800 
                    dark:from-purple-500 dark:to-purple-700 
                    text-transparent bg-clip-text">I</span>
                        vento
                    </h1>
                </Link>

                {/* NavLinks with hover effects */}
                <div className="hidden lg:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            href={link.url}
                            key={link.id}
                            className="group relative"
                        >
                            <p className="nav__link text-gray-800 dark:text-gray-300 
                            hover:text-purple-700 dark:hover:text-purple-500 
                            transition-colors duration-300">
                                {link.label}
                            </p>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 
                            bg-gradient-to-r from-purple-600 to-purple-800 
                            group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                </div>

                {/* Enhanced buttons */}
                <div className="flex items-center space-x-4">
                    <Button
                        className="relative overflow-hidden md:px-8 md:py-2.5 px-6 py-2 
                        text-white font-semibold text-base rounded-full
                        bg-gradient-to-r from-purple-600 to-purple-800 
                        dark:from-purple-500 dark:to-purple-700
                        hover:shadow-lg hover:shadow-purple-500/30
                        transition-all duration-300 group"
                    >
                        <Link href={'/signup'}>
                            <span className="absolute inset-0 bg-white/20 
                        translate-y-full group-hover:translate-y-0 
                        transition-transform duration-300" />
                            <span className="relative">{pathname == '/signup' ? 'Login instead' : 'Create Now'}</span>
                        </Link>
                    </Button>
                    <HiBars3BottomRight
                        onClick={openNav}
                        className="w-8 h-8 cursor-pointer 
                        text-gray-800 dark:text-gray-200 lg:hidden
                        hover:text-purple-700 dark:hover:text-purple-500 
                        transition-colors duration-300"
                    />
                </div>
            </div>
        </div>
    )
}

export default Nav;