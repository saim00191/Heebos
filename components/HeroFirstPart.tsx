import Container from "@/shared/Container";
import React from "react";

const HeroFirstPart = () => {
  return (
    <Container className="bg-[00040f] ">
      <div className="justify-center flex xs:justify-start items-center">
        <div className="rounded-[10px] flex items-center  gap-x-1 bg-[#393939] w-[390px] h-[32px]">
          <span className="w-[32px] h-[32px]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M15.9988 29.3309C14.9735 29.3309 13.9495 28.9416 13.1668 28.1643L12.1935 27.1909C11.8161 26.8149 11.3108 26.6069 10.7748 26.6056H9.40547C7.19214 26.6056 5.39081 24.8043 5.39081 22.5909V21.2203C5.38947 20.6856 5.18147 20.1803 4.80414 19.8003L3.84681 18.8443C2.27881 17.2856 2.27214 14.7376 3.83214 13.1683L4.80547 12.1936C5.18147 11.8163 5.38947 11.3109 5.39081 10.7749V9.40693C5.39081 7.19227 7.19214 5.39093 9.40547 5.39093H10.7761C11.3108 5.39093 11.8148 5.18293 12.1948 4.80293L13.1535 3.84693C14.7121 2.27893 17.2588 2.27093 18.8295 3.83227L19.8028 4.8056C20.1815 5.18293 20.6855 5.39093 21.2201 5.39093H22.5908C24.8041 5.39093 26.6055 7.19227 26.6055 9.40693V10.7763C26.6068 11.3109 26.8148 11.8163 27.1921 12.1963L28.1495 13.1536C28.9081 13.9083 29.3281 14.9136 29.3321 15.9869C29.3348 17.0536 28.9241 18.0576 28.1761 18.8163C28.1628 18.8296 28.1508 18.8443 28.1375 18.8563L27.1908 19.8029C26.8148 20.1803 26.6068 20.6856 26.6055 21.2216V22.5909C26.6055 24.8043 24.8041 26.6056 22.5908 26.6056H21.2201C20.6855 26.6069 20.1801 26.8149 19.8015 27.1923L18.8428 28.1496C18.0615 28.9363 17.0295 29.3309 15.9988 29.3309Z"
                fill="#393939"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.3904 13.4012C13.1704 13.6212 12.8851 13.7399 12.5691 13.7399C12.2731 13.7399 11.9824 13.6185 11.7491 13.3999C11.5277 13.1799 11.4024 12.8785 11.4024 12.5732C11.4024 12.2825 11.5251 11.9839 11.7411 11.7532C11.8597 11.6332 12.0011 11.5425 12.1424 11.4945C12.5451 11.3105 13.0797 11.4185 13.3971 11.7519C13.5104 11.8652 13.5971 11.9892 13.6544 12.1185C13.7171 12.2572 13.7491 12.4145 13.7491 12.5732C13.7491 12.8905 13.6224 13.1852 13.3904 13.4012ZM20.254 11.7464C19.7993 11.2931 19.0593 11.2931 18.6047 11.7464L11.7513 18.5997C11.2967 19.0544 11.2967 19.7944 11.7513 20.2504C11.9727 20.4704 12.2647 20.5917 12.5767 20.5917C12.8887 20.5917 13.1807 20.4704 13.4007 20.2504L20.254 13.3971C20.7087 12.9411 20.7087 12.2024 20.254 11.7464ZM19.8744 18.3519C19.4424 18.1705 18.9304 18.2692 18.5891 18.6105C18.5184 18.6932 18.4184 18.8212 18.3504 18.9719C18.2784 19.1345 18.2691 19.3092 18.2691 19.4265C18.2691 19.5439 18.2784 19.7172 18.3504 19.8799C18.4171 20.0292 18.4971 20.1505 18.6024 20.2559C18.8437 20.4799 19.1237 20.5932 19.4357 20.5932C19.7317 20.5932 20.0224 20.4732 20.2611 20.2505C20.4731 20.0385 20.5891 19.7452 20.5891 19.4265C20.5891 19.1065 20.4731 18.8145 20.2597 18.6012C20.1424 18.4852 20.0011 18.3945 19.8744 18.3519Z"
                fill="#00F6FF"
              />
            </svg>
          </span>
          <span className="text-[13px] xs:text-[15px]   leading-[27px] font-normal text-white uppercase">
            20%
          </span>
          <span className="text-[13px] xs:text-[15px]   leading-[27px] font-normal text-white/70 uppercase">
            Discount For
          </span>
          <span className="text-[13px] xs:text-[15px]   leading-[27px] font-normal text-white uppercase">
            1 MONTH
          </span>
          <span className="text-[13px] xs:text-[15px]   leading-[27px] font-normal text-white/70 uppercase">
            Account
          </span>
        </div>
      </div>
      <div className="relative flex">
        <div className="flex flex-col">
          <h2 className="text-[60px] text-center xs:text-left sm:text-[64px]  md:text-[72px] sml:w-[670px] w-full font-semibold text-white leading-[100.8px] py-8">
            The Next{" "}
            <span className="text-[#5CE1E6] text-[50px] xs:text-[60px] sm:text-[72px]">
              Generation{" "}
            </span>
            Payment Method.
          </h2>
          <p className="leading-[30.8px] text-white/70 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] w-full max-w-[483px]">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <div className="relative">
          <div className="w-[130px] absolute hidden  right-12 top-12 h-[130px] sml:flex flex-col justify-center items-center border-[#5CE1E6] border-2 rounded-full">
            <h2 className="text-[#5CE1E6] w-[84px] text-lg flex flex-col justify-center items-center leading-[23.4px]">
              <div className="flex items-center">
                <span>Get</span>
                <span className="ml-2">
                  <svg
                    width="34"
                    height="33"
                    viewBox="0 0 34 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9898 21.2616C10.7559 20.9828 10.7697 20.5787 11.0079 20.3167L11.0784 20.249L22.0903 11.0089C22.3943 10.7538 22.8477 10.7934 23.1029 11.0975C23.3368 11.3762 23.3229 11.7804 23.0848 12.0424L23.0143 12.1101L12.0024 21.3502C11.6983 21.6053 11.2449 21.5657 10.9898 21.2616Z"
                      fill="white"
                    />
                    <path
                      d="M14.3388 11.5797C13.9433 11.5459 13.65 11.198 13.6838 10.8024C13.7144 10.4429 14.0048 10.1678 14.3545 10.1461L14.461 10.1474L22.6133 10.8429C22.9739 10.8737 23.2493 11.1657 23.2698 11.5164L23.2681 11.6232L22.538 19.7731C22.5026 20.1685 22.1534 20.4603 21.758 20.4249C21.3986 20.3927 21.1248 20.1012 21.1045 19.7514L21.1063 19.6449L21.7715 12.2138L14.3388 11.5797Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
              <span className="text-[#5CE1E6] text-lg -ml-2">Started</span>
            </h2>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroFirstPart;
