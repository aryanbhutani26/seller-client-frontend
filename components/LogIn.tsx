"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import "remixicon/fonts/remixicon.css";

const LoginPage: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [gridItems, setGridItems] = useState<number[]>([]);
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const [showPassword, setShowPassword] = useState<string>("password");

  function handlePasswordType() {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const items = Array(
        Math.ceil(window.innerWidth / 64) * Math.ceil(window.innerHeight / 64)
      ).fill(null);
      setGridItems(items);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    console.log("User logged in:", data);
    router.push("/dashboard");
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-r from-[#4B7DFA] to-[#F35EA0] w-full text-white overflow-x-hidden">
        {/* ClothBuddy Logo */}
        <div className="absolute opacity-40 top-24 left-4 md:top-40 md:left-72 -rotate-[25deg]">
          <Image
            src="/ClothBuddyLogo.png"
            alt="Logo"
            width={120}
            height={120}
          />
        </div>
        {/* CLothBuddy Logo */}
        <div className="absolute opacity-40 right-10 top-80 md:left-2/3 rotate-[25deg]">
          <Image
            src="/ClothBuddyLogo.png"
            alt="Logo"
            width={120}
            height={120}
          />
        </div>
        {/* CLothBuddy Logo */}
        <div className="absolute opacity-40 bottom-4 right-10 md:bottom-10 md:right-10 rotate-[25deg]">
          <Image
            src="/ClothBuddyLogo.png"
            alt="Logo"
            width={120}
            height={120}
          />
        </div>
        <div className="absolute opacity-40 bottom-24 left-16 md:bottom-32 md:left-96 -rotate-[10deg]">
          <Image
            src="/ClothBuddyLogo.png"
            alt="Logo"
            width={120}
            height={120}
          />
        </div>
        {/* Background hovering effect */}
        <div className="absolute top-0 left-0 w-full grid grid-cols-[repeat(auto-fit,64px)] grid-rows-[repeat(auto-fit,64px)] z-0 h-screen overflow-hidden">
          {gridItems.map((_, i) => (
            <div
              key={i}
              className="border-2 border-[#A4C8E1] w-16 h-16 opacity-0 hover:opacity-100 duration-300 ease-out"
            ></div>
          ))}
        </div>

        {/* Content div */}
        <div>
          <nav className="flex justify-between items-center bg-black px-4 md:px-8 h-20 z-50">
            {/* navbar left side */}
            <div className="flex items-center font-bold text-3xl z-50">
              <h1>ClothBuddy</h1>
            </div>
            {/* navbar search 
            <div className=" md:flex items-center relative hidden ">
              <i
                className="ri-search-line absolute left-2
              "
              ></i>
              <input
                type="text"
                placeholder="Search for Products"
                name="searchbar"
                id="searchbar"
                className="bg-gray-900 px-10 py-2 text-white placeholder:text-white w-96"
              />
            </div>
            navbar right side
            <div className="md:hidden z-50 text-white">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <i className="ri-menu-line"></i>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <p className="text-black bg-white w-full h-full text-center">
                      WishList
                    </p>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <p className="text-black bg-white w-full h-full text-center">
                      Cart
                    </p>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <p className="text-black bg-white w-full h-full text-center">
                      Profile
                    </p>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="md:flex z-50 cursor-pointer items-center gap-8 text-xl hidden">
              <p>
                <i className="ri-heart-line"></i>
              </p>
              <p>
                <i className="ri-shopping-cart-line"></i>
              </p>
              <p>
                <i className="ri-user-fill text-3xl"></i>
              </p>
            </div> */}
          </nav>

          {/* Login Form */}
          <div className="mx-auto max-w-md p-6 mt-12 z-50 relative">
            <div className="rounded-lg bg-white p-8 shadow-lg ring-1 ring-white/10">
              <h2 className="mb-6 text-center text-2xl font-semibold text-black">
                Login
              </h2>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              {mounted && (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="User Name"
                    required
                    className="w-full rounded-md bg-gray-300 px-4 py-2 text-black placeholder-black text-sm"
                  />

                  <div className="relative flex items-center">
                    <input
                      type={showPassword}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      required
                      minLength={6}
                      className="w-full rounded-md bg-gray-300 px-4 py-2 text-black placeholder-black text-sm"
                    />
                    <i
                      onClick={handlePasswordType}
                      className="absolute right-2 ri-eye-fill text-black"
                    ></i>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-800 py-2 font-medium text-white hover:blue-900"
                  >
                    Login
                  </button>
                </form>
              )}
              <p className="mt-4 text-center text-sm text-black">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-blue-800 hover:underline">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;