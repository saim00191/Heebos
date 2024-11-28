import Container from "@/shared/Container";
import Image from "next/image";
import BillingImage from "@/public/BillingImage.png";
import DownloadNowButtons from "./DownloadNowButtons";
const Billing = () => {
  return (
    <Container className="py-2 flex flex-col xl:flex-row xl:items-center items-start justify-between ">
      <div className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[100%%] lg:w-[100%%] w-[250px] xs:w-[270px] xsm:w-[350px] sm:w-[500px] md:w-[600px] xl:w-[530px] xl:h-[455px] flex mx-12">
        <Image src={BillingImage} alt="BillingImage" />
      </div>
      <div className="xl:mx-8">
        <h2 className="xl:w-[470px] h-full w-full xl:h-[154px] font-semibold text-[48px] leading-[76.8px] text-white">
          Easily control your billing & invoicing.
        </h2>
        <p className="text-[18px] mt-7 leading-[28.8px] font-normal h-full w-full xl:w-[470px] xl:h-[87px] text-white/70">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <DownloadNowButtons />
      </div>
    </Container>
  );
};

export default Billing;
