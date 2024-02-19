"use client";

// ./components/Navbar.tsx

// ./components/Navbar.tsx

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../constants/index";
import Button from "./Button";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image src="/SehlabaThebe.png" alt="logo" width={200} height={100}/>
            </Link>
            <ul className={`h-full gap-12 lg:flex ${isMenuOpen ? '' : 'hidden'}`} style={{ marginRight: 0 }}>
                {NAV_LINKS.map((link) => (
                    <li key={link.key}>
                        <Link href={link.href} key={link.key}
                className="regular-16 text-gray-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>
                    </li>
                ))}
            </ul>

            <div className="lg:flexCenter hidden">
                <Button
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                />
            </div>

            <Image 
                src="menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
                style={{ marginLeft: "auto" }}
                onClick={toggleMenu}
            />
        </nav>
    );
};

export default Navbar;


