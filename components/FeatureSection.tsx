import Container from "@/shared/Container";
import React, { ReactNode } from 'react';
import { Abel } from "next/font/google";

const abel = Abel({
  subsets: ["latin"],
  weight: "400",
});

interface CardProps {
  title: string;
  description: string;
  icon: ReactNode; 
}
const FeatureSection = () => {
  const Card = ({ title, description, icon }: CardProps) => (
    <div
      className={`w-full xl:w-[470px] hover:bg-[#42475b]  h-auto sm:h-[115px] rounded-[20px] flex gap-x-5 items-center px-4 
      `}
    >
      <div className="h-[64px] w-[64px] p-4 rounded-full bg-[#09977c]/10  flex items-center justify-center">
        <span className="w-[38.4px] h-[38.4px]">{icon}</span>
      </div>
      <div>
        <h2 className="xs:text-[22px] xl:text-[18px] font-semibold text-white leading-[23.4px]">
          {title}
        </h2>
        <p className="font-normal text-[12px] xsm:text-[16px] leading-[24px] text-white/70 mt-2">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <Container className="py-40 flex flex-col xl:flex-row items-start xl:items-center justify-between">
      <div className="h-full sm:h-[383px] flex flex-col justify-between px-2">
        <h2 className="w-full xl:w-[622px] h-auto font-semibold leading-[76.8px] text-[40px] xs:text-[52px] xl:text-[48px] text-white text-left">
          You do the business, we&apos;ll handle the money.
        </h2>
        <p
          className={`${abel.className} w-full xl:w-[570px] h-auto text-[22px] xl:text-[18px] leading-[30.6px] text-white/70 text-left`}
        >
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="w-full sm:w-[170px] my-6 md:my-0 h-[64px] rounded-[10px] bg-[#5CE1E6] text-[18px] leading-[27px] font-normal text-[#00040e] mx-auto sm:mx-0">
          Get Started
        </button>
      </div>

      <div className="h-auto sm:h-[383px] flex flex-col sm:justify-between gap-5 sm:gap-0 mt-12 xl:mt-0">
        <Card
          title="Rewards"
          description="The best credit cards offer some tantalizing combinations of promotions and prizes"
          icon={
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.4696 23.7122C29.0552 24.1138 28.8648 24.6946 28.9592 25.2642L30.3816 33.1362C30.5016 33.8034 30.22 34.4786 29.6616 34.8642C29.1144 35.2642 28.3864 35.3122 27.7896 34.9922L20.7032 31.2962C20.4568 31.165 20.1832 31.0946 19.9032 31.0866H19.4696C19.3192 31.109 19.172 31.157 19.0376 31.2306L11.9496 34.9442C11.5992 35.1202 11.2024 35.1826 10.8136 35.1202C9.86639 34.941 9.23439 34.0386 9.38959 33.0866L10.8136 25.2146C10.908 24.6402 10.7176 24.0562 10.3032 23.6482L4.52559 18.0482C4.04239 17.5794 3.87439 16.8754 4.09519 16.2402C4.30959 15.6066 4.85679 15.1442 5.51759 15.0402L13.4696 13.8866C14.0744 13.8242 14.6056 13.4562 14.8776 12.9122L18.3816 5.72823C18.4648 5.56823 18.572 5.42103 18.7016 5.29623L18.8456 5.18423C18.9208 5.10103 19.0072 5.03223 19.1032 4.97623L19.2776 4.91223L19.5496 4.80023H20.2232C20.8248 4.86263 21.3544 5.22263 21.6312 5.76023L25.1816 12.9122C25.4376 13.4354 25.9352 13.7986 26.5096 13.8866L34.4616 15.0402C35.1336 15.1362 35.6952 15.6002 35.9176 16.2402C36.1272 16.8818 35.9464 17.5858 35.4536 18.0482L29.4696 23.7122Z"
                fill="#00F6FF"
              />
            </svg>
          }
        />
        <Card
          title="100% Secured"
          description="We take proactive steps to make sure your information and transactions are secure."
          icon={
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.5649 35.8619C19.7421 35.9544 19.9402 36.0015 20.1384 35.9999C20.3365 35.9984 20.533 35.9497 20.7118 35.8556L26.4204 32.8039C28.0392 31.941 29.3069 30.9761 30.2959 29.8527C32.4463 27.4051 33.6206 24.2813 33.5996 21.0602L33.532 10.4352C33.5256 9.21138 32.7218 8.11938 31.533 7.72243L20.9131 4.1593C20.2737 3.94279 19.573 3.94749 18.9448 4.17029L8.36516 7.8605C7.18284 8.27314 6.39356 9.37298 6.4 10.5983L6.46766 21.2155C6.4886 24.4413 7.70312 27.551 9.88895 29.9735C10.8876 31.0812 12.1666 32.032 13.8032 32.8808L19.5649 35.8619ZM18.0537 23.3743C18.2921 23.6034 18.6014 23.7163 18.9106 23.7132C19.2199 23.7116 19.5276 23.5955 19.7627 23.3633L26.0013 17.213C26.47 16.7501 26.4652 16.0064 25.9916 15.5498C25.5164 15.0933 24.7513 15.0964 24.2826 15.5593L18.8929 20.8718L16.6861 18.7505C16.211 18.294 15.4475 18.2987 14.9771 18.7615C14.5084 19.2244 14.5132 19.9681 14.9884 20.4246L18.0537 23.3743Z"
                fill="#00F6FF"
              />
            </svg>
          }
        />
        <Card
          title="Fast Support"
          description="Get 24/7 support from our expert team."
          icon={
            <svg
              width="39"
              height="40"
              viewBox="0 0 39 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.4966 4.93117C33.6963 4.10976 32.5118 3.80374 31.4074 4.12586L5.65282 11.6152C4.48754 11.939 3.6616 12.8683 3.43911 14.0489C3.21182 15.2504 4.00574 16.7757 5.04297 17.4135L13.0959 22.3629C13.9218 22.8702 14.9878 22.743 15.6713 22.0537L24.8927 12.7749C25.3569 12.2917 26.1252 12.2917 26.5894 12.7749C27.0536 13.242 27.0536 13.999 26.5894 14.4821L17.352 23.7625C16.6669 24.4503 16.5389 25.5213 17.0431 26.3524L21.9635 34.486C22.5397 35.4524 23.5321 36 24.6206 36C24.7486 36 24.8927 36 25.0207 35.9839C26.2693 35.8228 27.2617 34.9692 27.6298 33.7612L35.2649 8.03967C35.6011 6.94445 35.297 5.75259 34.4966 4.93117Z"
                fill="#00F6FF"
              />
            </svg>
          }
        />
      </div>
    </Container>
  );
};

export default FeatureSection;
