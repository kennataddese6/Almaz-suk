"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { MdClose, MdMenu } from "react-icons/md"

export default function Navbar() {
  const pathname = usePathname()
  const [showMobileNav, setShowMobileNav] = useState(false)
  return (
    <nav
      className={`md:flex  fixed z-50 w-full md:justify-between md:py-8 md:px-20 px-4 py-6 bg-white md:bg-transparent  ${
        showMobileNav ? "h-screen animate-fadein" : ""
      }`}
    >
      <div className="text-blue-400 text-xl md:text-2xl font-bold mb-5 flex justify-between items-center">
        <span>
          {" "}
          <Image src={"/image.png"} alt="Logo" width={40} height={40} />
        </span>{" "}
        Almasuk{" "}
        <span
          className={`md:hidden ${!showMobileNav && "hidden"}`}
          onClick={() => setShowMobileNav(false)}
        >
          <MdClose fontSize={20} />
        </span>
        <span
          className={`md:hidden ${showMobileNav && "hidden"}`}
          onClick={() => setShowMobileNav(true)}
        >
          <MdMenu fontSize={20} />
        </span>
      </div>
      <ul
        className={`text-white md:flex gap-20 text-base ${
          showMobileNav ? "" : "hidden"
        }`}
      >
        <Link
          href={"/"}
          className="no-underline"
          onClick={() => setShowMobileNav(false)}
        >
          <li
            className={`py-4 md:py-0  md:border-none ${
              pathname === "/"
                ? "text-blue-500 animate-fadein"
                : "text-neutral-600 "
            }`}
          >
            Home
          </li>
        </Link>

        <Link
          href={"/about"}
          className="no-underline"
          onClick={() => setShowMobileNav(false)}
        >
          <li
            className={` py-4 md:py-0  ${
              pathname === "/about"
                ? "text-white animate-fadein"
                : "text-neutral-600"
            }`}
          >
            Shop
          </li>
        </Link>
        <Link
          href={"/projects"}
          className="no-underline"
          onClick={() => setShowMobileNav(false)}
        >
          <li
            className={` py-4 md:py-0  ${
              pathname === "/projects"
                ? "text-white animate-fadein"
                : "text-neutral-600"
            }`}
          >
            Abouts
          </li>
        </Link>
        <Link
          href={"/contact"}
          className="no-underline"
          onClick={() => setShowMobileNav(false)}
        >
          <li
            className={` py-4 md:py-0  ${
              pathname === "/contact"
                ? "text-white animate-fadein"
                : "text-neutral-600"
            }`}
          >
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  )
}
