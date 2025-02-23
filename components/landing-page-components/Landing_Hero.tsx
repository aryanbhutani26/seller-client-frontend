import React from "react";
import Image from "next/image";
import Link from "next/link";

const Landing_Hero: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex justify-center items-center">
        <section className="m-8 md:mt-12 flex flex-col md:flex-row items-center justify-between bg-[#F3EBEB] rounded-lg">
          {/* Left Content */}
          <div className="md:w-1/2 flex flex-col justify-center items-center">
            <p className="text-xl md:text-3xl mt-10 font-normal text-center mx-10">
              Get more exposure to over <span className="font-bold bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent">15M+</span>
              users worldwide who trust ClothBuddy.
            </p>
            <Link
              href="/"
              className="inline-block mt-12 md:mt-32 bg-black hover:bg-[#252525] text-white text-xl font-bold py-2 px-4 md:py-4 md:px-6 rounded-full"
            >
              Start Selling
            </Link>
          </div>

          {/* Right Image */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center items-center">
            <Image
              src="/landing-hero-img.png"
              width={500}
              height={500}
              alt="Seller on ClothBuddy"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing_Hero;
