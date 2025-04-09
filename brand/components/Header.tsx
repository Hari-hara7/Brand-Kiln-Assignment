"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-black text-[#00FF88] shadow-md z-50 relative">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-extrabold tracking-wide">
          <Link href="/" className="hover:text-white transition duration-300">
            Car Bazaar 🚗
          </Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/wishlist" className="hover:text-white transition">
            Wishlist ❤️
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-[#00FF88] focus:outline-none text-xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-[#00FF88] px-6 py-4 space-y-4 text-lg font-medium absolute top-full left-0 w-full shadow-lg animate-fadeInDown">
          <Link href="/" className="block hover:text-white" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/wishlist" className="block hover:text-white" onClick={toggleMenu}>
            Wishlist ❤️
          </Link>
        </div>
      )}
    </header>
  );
}
