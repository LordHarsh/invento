import { navLinks } from "@/constant/Constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({closeNav, showNav}:Props) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
    return (
        <div>
            {/* Dark overlay with improved dark mode styling */}
            <div 
                className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[10000] 
                bg-black/70 dark:bg-black/80 w-full h-screen`}
            ></div>

            {/* Mobile navigation menu with dark mode colors */}
            <div 
                className={`text-white dark:text-gray-200 ${navOpen} 
                fixed justify-center flex flex-col h-full transform transition-all 
                duration-500 delay-300 w-[80%] sm:w-[60%] 
                bg-indigo-800 dark:bg-gray-900 
                space-y-6 z-[100006]`}
            >
                {navLinks.map((link) => (
                    <Link 
                        href={link.url} 
                        key={link.id}
                        className="hover:bg-indigo-700 dark:hover:bg-gray-800 transition-colors"
                    >
                        <p 
                            className="nav__link text-white dark:text-gray-300 
                            text-[20px] ml-12 border-b-[1.5px] pb-1 
                            border-white/20 dark:border-gray-700 
                            sm:text-[30px]"
                        >
                            {link.label}
                        </p>
                    </Link>
                ))}

                <CgClose 
                    onClick={closeNav} 
                    className="absolute top-[0.7rem] right-[1.4rem] 
                    sm:w-8 sm:h-8 w-6 h-6 
                    text-white dark:text-gray-300 
                    hover:text-gray-200 dark:hover:text-gray-100 
                    cursor-pointer"
                />
            </div>
        </div>
    )
}

export default MobileNav;