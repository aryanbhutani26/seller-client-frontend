"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import Image from "next/image";

const SignUpPage3: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Redirect to dashboard (replace with actual sign-up logic)
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#4B7DFA] to-[#F35EA0] w-full text-white overflow-x-hidden">
      {/* ClothBuddy Logos */}
      {["top-24 left-4 -rotate-[25deg]", "right-10 top-80 rotate-[25deg]", "bottom-4 right-10 rotate-[25deg]", "bottom-24 left-16 -rotate-[10deg]"].map((pos, index) => (
        <div key={index} className={`absolute opacity-40 ${pos}`}>
          <Image src="/ClothBuddyLogo.png" alt="Logo" width={120} height={120} />
        </div>
      ))}

      {/* Navbar */}
      <nav className="flex justify-between items-center bg-black px-4 md:px-8 h-20 z-50">
        <h1 className="text-3xl font-bold">ClothBuddy</h1>
      </nav>

      {/* Registration Form */}
      <div className="mx-auto max-w-md p-6 mt-12 z-30 relative">
        <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-white/10">
          <h2 className="mb-6 text-center text-2xl font-semibold text-black">
            Account Details
          </h2>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {mounted && (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="User Name"
                required
                className="w-full rounded-md bg-gray-300 px-4 py-2 text-black placeholder-black text-sm"
              />

              {/* Password Input */}
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a new password"
                  required
                  minLength={6}
                  className="w-full rounded-md bg-gray-300 px-4 py-2 text-black placeholder-black text-sm"
                />
                <i
                  onClick={() => setShowPassword((prev) => !prev)}
                  className={`absolute text-black right-2 cursor-pointer ${
                    showPassword ? "ri-eye-off-fill" : "ri-eye-fill"
                  }`}
                ></i>
              </div>

              {/* Confirm Password Input */}
              <div className="relative flex items-center">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  required
                  minLength={6}
                  className="w-full rounded-md bg-gray-300 px-4 py-2 text-black placeholder-black text-sm"
                />
                <i
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className={`absolute text-black right-2 cursor-pointer ${
                    showConfirmPassword ? "ri-eye-off-fill" : "ri-eye-fill"
                  }`}
                ></i>
              </div>

              <button className="w-full rounded-lg bg-blue-800 py-2 font-medium text-white hover:bg-blue-900 text-sm">
                Sign Up
              </button>
            </form>
          )}

          <p className="mt-4 text-center text-sm text-black">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-800 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage3;
