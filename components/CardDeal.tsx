import Container from "@/shared/Container";
import { Abel } from "next/font/google";
import CardDealImg from "@/public/assets/CardDealImg.png";
import Image from "next/image";
const abel = Abel({
  subsets: ["latin"],
  weight: "400",
});

const CardDeal = () => {
  return (
    <Container className="py-16 flex flex-col-reverse xl:flex-row xl:items-center items-start justify-between xl:mx-4">
      <div className="flex flex-col space-y-8  md:mt-6 xl:mt-0">
        <h2 className="xl:w-[570px] w-full h-full xl:h-[154px] font-semibold text-[48px] leading-[76.8px] text-white">
          Find a better card deal in few easy steps.
        </h2>
        <p
          className={`${abel.className} font-normal text-[18px] leading-[30.6px] text-white/70 xl:w-[500px] h-full w-full xl:h-[62px]`}
        >
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button className="w-[170px] h-[64px] rounded-[10px] font-medium bg-[#5CE1E6] text-[18px] leading-[27px] text-[#00040e]">
          Get Started
        </button>
      </div>
      <div className="h-[400px]  sm:h-[500px] md:h-[600px] lg:h-[100%%] lg:w-[100%%] w-[280px] xs:w-[320px] sm:w-[500px] md:w-[600px] xl:w-[513px] xl:h-[449px] mt-12 xl:mt-0 ">
        <Image src={CardDealImg} alt="CardDealImg" />
      </div>
    </Container>
  );
};

export default CardDeal;
