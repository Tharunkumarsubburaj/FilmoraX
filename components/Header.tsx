"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const headerLinks = [
    { name: "Home", href: "/" },
    { name: "Movies", href: "/movies" },
    { name: "Discover", href: "/discover" },
  ];

  return (
    <header className="bg-black px-4 sm:px-6 lg:px-10 lg:py-6 items-center border-b border-white/10 relative">
       <div className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl text-ForestGreen font-bold">
          FilmoraX
        </h1>

        <nav className="hidden lg:flex items-center gap-8">
          {headerLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathName === "/"
                : pathName.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg relative font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-LimeGreen before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:w-full before:bg-LimeGreen before:rounded-full before:animate-expandWidth"
                    : "text-gray-400 hover:text-LimeGreen/70"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="relative">
            <label htmlFor="search" className="sr-only">
              Search Movies
            </label>
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-AquaMint"
            />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Enter Movie Title..."
              className="w-72 placeholder:text-AquaMint bg-SilverMist/30 pl-10 pr-4 py-2 rounded-3xl outline-none text-white"
            />
          </div>

          <button className="px-4 py-2 bg-LimeGreen/80 text-ForestGreen rounded-lg hover:bg-LimeGreen transition-colors duration-300">
            Sign In
          </button>
        </div>

        <div className="lg:hidden text-white p-2 rounded-md flex hover:bg-white/10 transition">
          <button
            onClick={() => {
              setSearchOpen(!searchOpen);
              setMenuOpen(false);
            }}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition"
            aria-label="Toggle Search"
          >
            <Search size={18} className="text-AquaMint" />
          </button>
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              setSearchOpen(false);
            }}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          searchOpen ? "max-h-125 opacity-100 mt-4" : "max-h-0 opacity-0 hidden"
        }`}
      >
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-AquaMint"
          />
          <input
            type="search"
            name="mobile-search"
            id="mobile-search"
            placeholder="Enter Movie Title..."
            className="w-full placeholder:text-AquaMint bg-SilverMist/30 pl-10 pr-4 py-2 rounded-3xl outline-none text-white"
          />
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden mb-3 transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-125 opacity-100 mt-4" : "max-h-0 opacity-0 hidden"
        }`}
      >
        <div className="flex flex-col gap-5 bg-[#111] rounded-2xl p-5 border border-white/10 shadow-lg">
          <nav className="flex flex-col gap-4">
            {headerLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathName === "/"
                  : pathName.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-LimeGreen"
                      : "text-gray-300 hover:text-LimeGreen/70"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <button className="w-full px-4 py-2 bg-LimeGreen/80 text-ForestGreen rounded-lg hover:bg-LimeGreen transition-colors duration-300">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
