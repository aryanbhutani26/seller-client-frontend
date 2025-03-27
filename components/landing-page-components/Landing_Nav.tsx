import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";

const Landing_Nav: React.FC = () => {
  

  return (
    <footer>
      <nav className="navbar flex justify-between items-center px-7 py-5 container mx-auto">
        <h1 className="text-2xl font-bold md:text-3xl">ClothBuddy</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/signup" className="text-lg font-normal hover:underline">
            Sell With Us
          </Link>
          <Link href="/" className="text-lg font-normal hover:underline">
            Success Stories
          </Link>
          <Link
            href="/signup"
            className="bg-black hover:bg-[#252525] text-white font-bold py-2 px-4 rounded-full"
          >
            Signup/Login
          </Link>
        </div>

<<<<<<< HEAD
      {/* Mobile Dropdown Menu */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button aria-label="Open menu" className="text-xl">
              <i className="ri-menu-3-line font-bold"></i>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard">Das</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link 
                href="#reviews-section" 
                onClick={scrollToReviews}
              >
                Success Stories
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
=======
        {/* Mobile Dropdown Menu */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button aria-label="Open navigation menu" className="text-xl">
                <i className="ri-menu-3-line font-bold"></i>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/signup">Sell With Us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/">Success Stories</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/signup">Signup/Login</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </footer>
>>>>>>> 126ff4d4b3c0d68fc3f7b84f5409131e43bef55b
  );
};

export default Landing_Nav;
