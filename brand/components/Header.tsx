"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-black text-white shadow">
      <h1 className="text-xl font-bold">
        <Link href="/">Car Bazaar 🚗</Link>
      </h1>
      <nav className="space-x-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/wishlist" className="hover:underline">
          Wishlist ❤️
        </Link>
      </nav>
    </header>
  );
}
