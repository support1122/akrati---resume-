"use client"
import React, { useState } from 'react'

const Navbar = () => {
    const menuItems = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Service", href: "#service" },
        { label: "Resume", href: "#resume" },
        { label: "Project", href: "#project" },
        { label: "Contact", href: "#contact" },
    ];
    const [selected, setSelected] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="relative w-full max-w-[1298px] h-[70px] sm:h-[80px] lg:h-[86px] bg-[#171717] text-white px-6 lg:px-12 rounded-full backdrop-blur-[15px] mx-auto flex items-center justify-between z-50">
            {/* Left Side Menu */}
            <div className="hidden lg:flex items-center gap-8">
                {menuItems.slice(0, 3).map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className={
                            item.label === "About"
                                ? "px-8 py-3 rounded-full bg-[#FD853A] text-white text-lg font-medium hover:bg-[#e67a2e] transition-colors"
                                : "text-lg font-medium hover:text-[#FD853A] transition-colors text-gray-300"
                        }
                    >
                        {item.label}
                    </a>
                ))}
            </div>

            {/* Center Logo */}
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#FD853A] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">AM</span>
                </div>
                <h1 className="text-xl font-semibold">Akrati Malviya</h1>
            </div>

            {/* Right Side Menu */}
            <div className="hidden lg:flex items-center gap-8">
                {menuItems.slice(3).map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="text-lg font-medium hover:text-[#FD853A] transition-colors text-gray-300"
                    >
                        {item.label}
                    </a>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#FD853A] hover:bg-[#e67a2e] transition-colors"
                onClick={toggleMobileMenu}
            >
                {isMobileMenuOpen ? <span className="text-white text-xl">×</span> : <span className="text-white text-xl">☰</span>}
            </button>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-[100%] left-0 right-0 mt-2 bg-[#171717] rounded-[25px] border border-white backdrop-blur-[15px] lg:hidden z-40">
                    <div className="flex flex-col p-4 gap-2">
                        {menuItems.map((item) => (
                            <button
                                key={item.label}
                                className={`w-full h-[50px] flex items-center justify-center rounded-[25px] text-base font-medium transition duration-300 ${selected === item.label ? 'bg-[#FD853A] font-bold' : 'bg-transparent hover:bg-[#232323]'}`}
                                onClick={() => {
                                    setSelected(item.label);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
