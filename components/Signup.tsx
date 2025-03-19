"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import "remixicon/fonts/remixicon.css";

const SignUpPage: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    aadhar: "",
    pan: "",
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

    // Supabase Sign Up
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    console.log("User registered:", data);
    router.push("/dashboard"); // This will redirect to dashboard after successful registration
  };

  return (
    <>
      <main className="min-h-screen bg-[#2C3E50] w-full text-white overflow-x-hidden">
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
          <div className="h-20 flex pl-8 md:pl-10 items-center font-bold text-3xl z-50">
            <h1>ClothBuddy</h1>
          </div>

          {/* Registration Form */}
          <div className="mx-auto max-w-md p-6 mt-12 z-50 relative">
            <div className="rounded-3xl bg-black p-8 shadow-lg ring-1 ring-white/10">
              <h2 className="mb-6 text-center text-2xl font-semibold">
                Register
              </h2>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              {mounted && (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your e-mail"
                    required
                    className="w-full rounded-md bg-gray-600/50 px-4 py-2 text-white placeholder-gray-400"
                  />
                  <input
                    type="text"
                    name="aadhar"
                    value={formData.aadhar}
                    onChange={handleChange}
                    placeholder="Enter your Aadhaar Number"
                    required
                    maxLength={12}
                    pattern="\d{12}"
                    title="Aadhaar number should be 12 digits"
                    className="w-full rounded-md bg-gray-600/50 px-4 py-2 text-white placeholder-gray-400"
                  />
                  <input
                    type="text"
                    name="pan"
                    value={formData.pan}
                    onChange={handleChange}
                    placeholder="Enter your PAN Number"
                    required
                    pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                    title="Enter a valid PAN number (e.g., ABCDE1234F)"
                    className="w-full rounded-md bg-gray-600/50 px-4 py-2 text-white placeholder-gray-400"
                  />
                  <div className="relative flex items-center">
                    <input
                      type={showPassword}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a new password"
                      required
                      minLength={6}
                      className="w-full rounded-md bg-gray-600/50 px-4 py-2 text-white placeholder-gray-400"
                    />
                    <i
                      onClick={handlePasswordType}
                      className="absolute right-2 ri-eye-fill"
                    ></i>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-gray-600/50 py-2 font-medium text-white hover:bg-gray-600/70"
                  >
                    Register
                  </button>
                </form>
              )}
              <p className="mt-4 text-center text-sm text-gray-400">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-400 hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUpPage;
