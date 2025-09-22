"use client";

import { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Projects", path: "/projects" },
    { name: "Company", path: "/company" },
    { name: "Contact", path: "/contact" },
    { name: "Training", path: "/training" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-500 ease-in-out ${
        isScroll
          ? "bg-white shadow-md dark:bg-darkTheme dark:shadow-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto max-w-7xl">
        {/* Mobile Navbar - Full width */}
        <div className="lg:hidden w-full px-5 py-3 flex justify-between items-center relative">
          {/* Hamburger Icon */}
          <button onClick={toggleMenu}>
            <HiMenuAlt3 size={30} />
          </button>

          {/* Logo - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image src={assets.logo} alt="logo" className="w-[153px] h-auto" />
          </div>

          {/* Invisible spacer for balance */}
          <div className="invisible">
            <HiMenuAlt3 size={30} />
          </div>
        </div>

        {/* Desktop Navbar - Fixed layout */}
        <div className="hidden lg:flex w-full px-5 py-0 justify-between items-center">
          {/* Logo - Fixed position on left */}
          <div className="flex-shrink-0">
            <Image src={assets.logo} alt="logo" className="w-[153px] h-auto" />
          </div>

          {/* Desktop Navigation - Fixed position on right */}
          <div className="flex gap-[35px] text-[15px] font-medium text-[#121212] flex-shrink-0">
            {navLinks.map((link, index) => (
              <Link href={link.path} key={index}>
                <p className="pt-9 pb-7">{link.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar for Mobile */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/20 z-40 lg:hidden"
                onClick={closeMenu}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />

              {/* Full-width Sidebar */}
              <motion.div
                className="fixed top-0 left-0 h-full w-full bg-white shadow-lg z-50 lg:hidden"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.5 }}
              >
                {/* Close Button */}
                <div className="flex justify-end items-center py-6 px-5">
                  <button
                    className="flex items-center gap-2 text-[#888888]"
                    onClick={closeMenu}
                  >
                    <span>Close</span>
                    <IoMdClose size={28} />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col text-[15px] border-t border-gray-200 mt-4">
                  {navLinks.map((link, index) => (
                    <Link
                      href={link.path}
                      key={index}
                      onClick={closeMenu}
                      className="border-b border-gray-200 px-6 py-4"
                    >
                      <p className="text-[#121212]">{link.name}</p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
