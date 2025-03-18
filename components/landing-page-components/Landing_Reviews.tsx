import React from "react";
import Image from "next/image";

interface Review {
  imgSrc: string;
  h1: string;
  h2: string;
  p: string;
  id: number;
}

const Landing_Reviews: React.FC = () => {
  const profileData: Review[] = [
    {
      imgSrc: "/review-girl-img.png",
      h1: "Chris",
      h2: "President and CEO, PrintReach, USA",
      p: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      id: 1,
    },
    {
      imgSrc: "/review-girl-img.png",
      h1: "Chris",
      h2: "President and CEO, PrintReach, USA",
      p: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      id: 2,
    },
    {
      imgSrc: "/review-girl-img.png",
      h1: "Chris",
      h2: "President and CEO, PrintReach, USA",
      p: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      id: 3,
    },
  ];

  return (
    <div>
      {/* reviews section */}
      <div id="reviews-section" className="p-10 md:p-14 bg-[#1C4670]">
        <div className="flex justify-between items-center">
          <h1 className="text-[#FFFFFF] w-36 text-center md:w-auto text-xl md:text-4xl font-bold">
            What peoples says about us
          </h1>
        </div>

        <div className="md:grid grid-cols-3 gap-5 mt-10">
          {profileData.map((data) => (
            <div
              className="mt-5 md:mt-0 bg-[#FFFFFF] border-2 border-[#FCDDEC] p-4 rounded-md"
              key={data.id}
            >
              <div className="flex justify-between items-center">
                <p className="bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent text-5xl">
                &quot;
                </p>

                <div>
                  <i className="ri-star-fill text-xl text-[#FFC226]"></i>
                  <i className="ri-star-fill text-xl text-[#FFC226]"></i>
                  <i className="ri-star-fill text-xl text-[#FFC226]"></i>
                  <i className="ri-star-fill text-xl text-[#FFC226]"></i>
                </div>
              </div>

              <div className="mt-3">
                <p className="text-[#667085]">{data.p}</p>
              </div>

              {/* // Replace the img tag in the profile section */}
              <div className="mt-4 md:flex gap-4 items-center">
                <Image
                  src={data.imgSrc}
                  alt="profile image"
                  width={64}
                  height={64}
                  className="h-16 w-16 object-cover rounded-full"
                />
                <div>
                  <h1 className="text-[#3C2109] text-lg font-bold">{data.h1}</h1>
                  <h2 className="text-[#282728] font-normal text-xs">{data.h2}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing_Reviews;
