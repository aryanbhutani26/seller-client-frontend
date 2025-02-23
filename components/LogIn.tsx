"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
} from "@react-oauth/google";

const LogInPage: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    router.push("#");
  };

  // Google auth functions
  const handleSuccess = (response: CredentialResponse) => {
    console.log("Google Login Success:", response);
    router.push("/");
  };

  const handleError = () => {
    console.error("Google Login Failed");
  };

  //
  const [gridItems, setGridItems] = useState<number[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const items = Array(
        Math.ceil(window.innerWidth / 64) * Math.ceil(window.innerHeight / 64)
      ).fill(null);
      setGridItems(items);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#2C3E50] w-full text-white overflow-x-hidden">
      {/* background hovering effect */}
      <div className="absolute top-0 left-0 w-full grid grid-cols-[repeat(auto-fit,64px)] grid-rows-[repeat(auto-fit,64px)] z-0">
        {gridItems.map((_, i) => (
          <div
            key={i}
            className="border-2 border-[#A4C8E1] w-16 h-16 opacity-0 hover:opacity-100 duration-300 ease-out"
          ></div>
        ))}
      </div>

      {/* content div */}
      <div>
        <div className="h-20 flex pl-8 md:pl-10 items-center font-bold text-3xl z-50">
          <h1>ClothBuddy</h1>
        </div>

        {/* Sign In Form */}
        <div className="mx-auto max-w-md p-6 mt-12 z-50 relative">
          <div className="rounded-3xl bg-black p-8 shadow-lg ring-1 ring-white/10">
            <h1 className="mb-6 text-center text-2xl font-semibold">Log In</h1>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  required
                  className="w-full rounded-md bg-gray-600/50 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                  required
                  minLength={6}
                  className="w-full rounded-md bg-gray-600/50 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <Link
                  href="/reset-password"
                  className="text-blue-400 text-sm hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-gray-600/50 py-2 font-medium text-white hover:bg-gray-600/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  Log In
                </button>
              </div>
            </form>

            {/* Google Auth */}
            <div className="mt-4">
              <GoogleOAuthProvider clientId="926648970984-6ohif2ohrsrhig9o884g5un7j6i1jo57.apps.googleusercontent.com">
                <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
              </GoogleOAuthProvider>
            </div>

            {/* Link to Sign Up Page */}
            <p className="mt-4 text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-400 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LogInPage;
