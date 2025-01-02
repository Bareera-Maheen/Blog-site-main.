"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

// Define the links for the mobile nav menu
const links = [
  {
    name: "home",
    path: "/"
  }, 
  {
    name: "about",
    path: "/about"
  },
  {
    name: "contact",
    path: "/contact"
  }
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the sheet open/close
  const pathname = usePathname(); // Get the current pathname

  const handleLinkClick = () => {
    setIsOpen(false); // Close the sheet when a link is clicked
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}> {/* Pass open and onOpenChange props to control sheet */}
      {/* Trigger button to open the menu */}
      <SheetTrigger
        className="flex justify-center items-center"
        onClick={() => setIsOpen(true)} // Open the sheet when clicked
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      {/* Sheet content that displays the menu */}
      <SheetContent className="flex flex-col bg-black">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" className="text-2xl font-semibold text-yellow-600" onClick={handleLinkClick}>
            <h1>
              Blog-site <span className=" text-yellow-600">.</span>
            </h1>
          </Link>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col items-center">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                pathname === link.path ? "text-yellow-600 border-b-2 border-accent" : "text-white"
              } py-2 px-4 text-lg font-semibold`}
              onClick={handleLinkClick} // Close the sheet when a link is clicked
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );

};


export default MobileNav;
