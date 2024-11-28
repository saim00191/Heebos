import Image from "next/image";
import mainImage from "@/public/MainImage.png";

const HeroSecondPart = () => {
  return (
    <div className="relative flex justify-end items-end">
      <Image
        src={mainImage}
        alt="HandImage"
        className="w-full  xl:h-[600px] mt-20 xl:mt-0"
      />
    </div>
  );
};

export default HeroSecondPart;
