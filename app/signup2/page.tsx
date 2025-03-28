"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const SignUpPage2: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    storeName: "",
    storeType: "",
    preference: "",
    gst: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [gridItems, setGridItems] = useState<number[]>([]);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const items = Array(
        Math.ceil(window.innerWidth / 64) * Math.ceil(window.innerHeight / 64)
      ).fill(null);
      setGridItems(items);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Reset error on new submission

    if (!formData.storeName || !formData.storeType || !formData.preference || !formData.gst) {
      setError("All fields are required.");
      return;
    }

    // Redirect after successful submission
    router.push("/signup3");
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#4B7DFA] to-[#F35EA0] w-full text-white overflow-x-hidden">
      {/* ClothBuddy Logo */}
      <div className="absolute opacity-40 top-24 left-4 md:top-40 md:left-72 -rotate-[25deg]">
        <Image src="/ClothBuddyLogo.png" alt="Logo" width={120} height={120} />
      </div>
      <div className="absolute opacity-40 right-10 top-80 md:left-2/3 rotate-[25deg]">
        <Image src="/ClothBuddyLogo.png" alt="Logo" width={120} height={120} />
      </div>

      {/* Background hovering effect */}
      <div className="absolute top-0 left-0 w-full grid grid-cols-[repeat(auto-fit,64px)] grid-rows-[repeat(auto-fit,64px)] z-10 h-screen overflow-hidden">
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
          <h1 className="font-bold text-3xl z-50">ClothBuddy</h1>
        </nav>

        {/* Registration Form */}
        <div className="mx-auto max-w-md p-6 mt-12 z-30 relative">
          <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-white/10">
            <h2 className="mb-6 text-center text-2xl font-semibold text-black">Store Details</h2>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            {mounted && (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="storeName"
                  value={formData.storeName}
                  onChange={handleChange}
                  placeholder="Store Name"
                  required
                  className="w-full rounded-md bg-gray-300 px-4 py-2 text-black placeholder-black text-sm"
                />

                <div>
                  <label htmlFor="storeType" className="text-black">
                    Select Store Type
                  </label>
                  <select
                    name="storeType"
                    value={formData.storeType}
                    onChange={handleChange}
                    className="w-full rounded-md bg-gray-300 px-4 py-2 text-black placeholder-black text-sm"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Private">Private</option>
                    <option value="LLP">LLP</option>
                    <option value="Public">Public</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preference" className="text-black">
                    Select Clothing Preference
                  </label>
                  <select
                    name="preference"
                    value={formData.preference}
                    onChange={handleChange}
                    className="w-full rounded-md bg-gray-300 px-4 py-2 text-black placeholder-black text-sm"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Unisex">Unisex</option>
                  </select>
                </div>

                <input
                  type="text"
                  name="gst"
                  value={formData.gst}
                  onChange={handleChange}
                  placeholder="GST Number"
                  required
                  minLength={6}
                  className="w-full rounded-md bg-gray-300 px-4 py-2 text-black placeholder-black text-sm"
                />

                <button className="w-full rounded-lg bg-blue-800 py-2 font-medium text-white hover:bg-blue-900 text-sm">
                  Next
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
      </div>
    </main>
  );
};

export default SignUpPage2;
