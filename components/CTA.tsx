import Container from "@/shared/Container";
import React from "react";

const CTA = () => {
  return (
    <Container className="py-8">
      <div className=" py-4 xs:py-6 xl:h-[293px] flex flex-col xl:flex-row items-center justify-between rounded-[20px] bg-gradient-to-r from-[#6D6D6D] via-[#6D6D6D]/90 to-[#11101D] px-6 md:px-10 lg:px-14">
        <div className="flex flex-col justify-center  text-center xl:text-left">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-[42px] md:leading-[52px] xl:w-[670px]">
          Let&apos;s try our service now!
          </h2>
          <p className="text-white/70 text-sm md:text-lg lg:text-[18px] leading-[28.8px] xl:w-[445px] mt-4 md:mt-6">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <button className="mt-6 xl:mt-0 w-full sm:w-[170px] h-[64px] rounded-[10px] font-medium bg-[#5CE1E6] text-[16px] md:text-[18px] leading-[27px] text-[#00040e]">
          Get Started
        </button>
      </div>
    </Container>
  );
};

export default CTA;
