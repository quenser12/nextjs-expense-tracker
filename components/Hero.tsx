import React from "react";
import { Login } from ".";

const Hero = () => {
  return (
    <div className="hero__bg-image">
      <div className="md:flex">
        <div className="md:w-1/2">
          <div className="p-10">
            <div className="flex items-center justify-center text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Expense Tracker
              </h1>
            </div>
            <div className="flex items-center justify-center text-center">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4">
                "Be in Control"
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <Login username={""} password={""} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
