    // components/NavBar.tsx
    "use client";

    import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

    export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/" },
        { name: "Career Tools", href: "/builder" },
        { name: "Pricing", href: "/pricing" },
        { name: "Our Story", href: "/story" },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <nav className="flex items-center space-x-8">
        {links.map((link) => (
            <Link
            key={link.href}
            href={link.href}
            className={`text-white ${
                isActive(link.href) ? "font-bold text-black" : ""
            }`}
            >
            {link.name}
            </Link>
        ))}
        <Link href="/builder">
            <button className="bg-white text-black px-6 py-2 rounded-md">
            Get started
            </button>
        </Link>
        </nav>
    );
    }