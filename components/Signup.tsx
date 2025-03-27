"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const SignUpPage: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    adhar: "",
    pan: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [gridItems, setGridItems] = useState<number[]>([]);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateGridItems = () => {
      if (typeof window !== "undefined") {
        const items = Array(
          Math.ceil(window.innerWidth / 64) * Math.ceil(window.innerHeight / 64)
        ).fill(null);
        setGridItems(items);
      }
    };

    updateGridItems();
    window.addEventListener("resize", updateGridItems);
    return () => window.removeEventListener("resize", updateGridItems);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Basic input validation
    if (formData.adhar.length !== 12 || !/^\d{12}$/.test(formData.adhar)) {
      setError("Aadhaar number should be exactly 12 digits.");
      return;
    }
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.pan)) {
      setError("PAN number should be in the format ABCDE1234F.");
      return;
    }

    console.log("Form submitted:", formData);
    router.push("/signup2");
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-r from-[#4B7DFA] to-[#F35EA0] w-full text-white overflow-x-hidden">
        {/* ClothBuddy Logo Background */}
        {["top-24 left-4 md:top-40 md:left-72 -rotate-[25deg]", 
          "right-10 top-80 md:left-2/3 rotate-[25deg]", 
          "bottom-4 right-10 md:bottom-10 md:right-10 rotate-[25deg]", 
          "bottom-24 left-16 md:bottom-32 md:left-96 -rotate-[10deg]"
        ].map((pos, index) => (
          <div key={index} className={`absolute opacity-40 ${pos}`}>
            <Image src="/ClothBuddyLogo.png" alt="Logo" width={120} height={120} />
          </div>
        ))}

        {/* Background Hover Effect */}
        <div className="absolute top-0 left-0 w-full grid grid-cols-[repeat(auto-fit,64px)] grid-rows-[repeat(auto-fit,64px)] z-10 h-screen overflow-hidden">
          {gridItems.map((_, i) => (
            <div key={i} className="border-2 border-[#A4C8E1] w-16 h-16 opacity-0 hover:opacity-100 duration-300 ease-out"></div>
          ))}
        </div>

        {/* Content */}
        <div>
          <nav className="flex justify-between items-center bg-black px-4 md:px-8 h-20 z-50">
            <h1 className="font-bold text-3xl">ClothBuddy</h1>
          </nav>

          {/* Registration Form */}
          <div className="mx-auto max-w-md p-6 mt-12 z-30 relative">
            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-white/10">
              <h2 className="mb-6 text-center text-2xl font-semibold text-black">Register</h2>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              {mounted && (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full rounded-md bg-gray-300 px-4 py-2 text-black placeholder-black text-sm"
                  />
                  <input
                    type="tel"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    title="Phone number should be 10 digits"
                    className="w-full rounded-md bg-gray-300 px-4 py-2 text-black placeholder-black text-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full rounded-md bg-gray-300 px-4 py-2 text-black placeholder-black text-sm"
                  />
                  <input
                    type="text"
                    name="adhar"
                    value={formData.adhar}
                    onChange={handleChange}
                    placeholder="Aadhaar Number"
                    required
                    inputMode="numeric"
                    pattern="\d{12}"
                    title="Aadhaar number should be exactly 12 digits"
                    className="w-full rounded-md bg-gray-300 px-4 py-2 text-black placeholder-black text-sm"
                  />
                  <input
                    type="text"
                    name="pan"
                    value={formData.pan}
                    onChange={handleChange}
                    placeholder="PAN Number"
                    required
                    pattern="[A-Z]{5}[0-9]{4}[A-Z]"
                    title="PAN number should be in the format ABCDE1234F"
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
    </>
  );
};

export default SignUpPage;
