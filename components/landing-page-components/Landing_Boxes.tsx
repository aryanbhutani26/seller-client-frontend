import React from "react";

const Boxes: React.FC = () => {
  return (
    <div>
      <section className="flex flex-col justify-center items-center py-10">
        <h1 className="text-2xl md:text-3xl font-normal">
          Why to partner up with us ?
        </h1>

        {/* boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-20 md:gap-y-10 lg:gap-6 m-6">
          <div className="text-center">
            {/* first box */}
            <div className="h-32 w-48 md:h-40 md:w-52 lg:h-44 lg:w-60 rounded-xl bg-[#EEF9B6] shadow-xl grid place-items-center">
              <i className="ri-money-rupee-circle-fill text-5xl md:text-7xl"></i>
            </div>
            <h2 className="mt-2 text-lg lg:text-xl font-normal">Earn More</h2>
          </div>
          {/* second box */}
          <div className="text-center">
            <div className="h-32 w-48 md:h-40 md:w-52 lg:h-44 lg:w-60 rounded-xl bg-[#A1F2F2] shadow-xl grid place-items-center">
              <i className="ri-upload-cloud-2-fill text-5xl md:text-7xl"></i>
            </div>
            <h2 className="mt-2 text-lg lg:text-xl font-normal">Grow</h2>
          </div>
          {/* third box */}
          <div className="text-center">
            <div className="h-32 w-48 md:h-40 md:w-52 lg:h-44 lg:w-60 rounded-xl bg-[#E9B2E9] shadow-xl grid place-items-center">
              <i className="ri-team-fill text-5xl md:text-7xl"></i>
            </div>
            <h2 className="mt-2 text-lg lg:text-xl font-normal">
              More Exposure
            </h2>
          </div>
          {/* fourth box */}
          <div className="text-center">
            <div className="h-32 w-48 md:h-40 md:w-52 lg:h-44 lg:w-60 rounded-xl bg-[#FF8B8D] shadow-xl grid place-items-center">
              <i className="ri-bank-card-fill text-5xl md:text-7xl"></i>
            </div>
            <h2 className="mt-2 text-lg lg:text-xl font-normal">
              Hassle-Free Payments
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Boxes;
