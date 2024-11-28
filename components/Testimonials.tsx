import Container from "@/shared/Container";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Img1 from "@/public/TestimonialsImg1.png";
import Img2 from "@/public/TestimonialsImg2.png";
import Img3 from "@/public/TestimonialsImg3.png";

interface TestimonialCardProps {
  img: string | StaticImageData;
  name: string;
  title: string;
  quote: string;
}

const testimonials = [
  {
    img: Img1,
    name: "Herman Jensen",
    title: "Founder & Leader",
    quote:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
  },
  {
    img: Img2,
    name: "Steve Mark",
    title: "Founder & Leader",
    quote:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
  },
  {
    img: Img3,
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    quote:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
  },
];

const TestimonialCard = ({ img, name, title, quote }: TestimonialCardProps) => (
  <div className="w-full max-w-[250px] h-auto xsm:w-[290px] md:max-w-[370px] lg:w-[370px] lg:h-[395px] rounded-[20px] hover:bg-[#7F7E83] border-2 border-[#7F7E83] flex flex-col space-y-8 justify-center items-start mx-auto p-6">
    <svg
      width="43"
      height="28"
      viewBox="0 0 43 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[30px] h-[20px] md:w-[43px] md:h-[28px]"
    >
      <path
        d="M11.7984 27.6L18.9984 0H12.3984L0.398438 27.6H11.7984ZM35.7984 27.6L42.9984 0H36.3984L24.3984 27.6H35.7984Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="28.86"
          y1="-24.8"
          x2="41.79"
          y2="24.15"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01" stopColor="#DEF9FA" />
          <stop offset="1" stopColor="#33BBCF" />
        </linearGradient>
      </defs>
    </svg>
    <h2 className="text-white leading-7 md:leading-[32.4px]  mt-4 md:mt-6 text-sm md:text-base lg:text-lg">
      {quote}
    </h2>
    <div className="flex items-center gap-x-3 mt-6">
      <Image
        src={img}
        alt={name}
        className="w-[48px] h-[48px] rounded-full object-cover"
      />
      <div>
        <h3 className="text-white text-sm md:text-[20px] lg:text-[22px]">
          {name}
        </h3>
        <p className="text-white opacity-50 text-xs mt-1 md:text-[16px] lg:text-[18px]">
          {title}
        </p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <Container className="py-6">
    <div className="flex flex-col lgl:flex-row  justify-between items-center ">
      <h2 className="text-white text-[36px] sm:text-[48px] font-semibold w-full mdl:w-[470px]">
        What people are saying about us
      </h2>
      <p className="text-white/70 text-[16px] sm:text-[18px] w-full mdl:w-[450px] py-4">
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-[66px] mt-12">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </div>
  </Container>
);

export default Testimonials;
