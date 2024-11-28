"use client";
import Container from "@/shared/Container";
import CountUp from "react-countup";

const SubHero = () => {
  const StatItem = ({
    value,
    label,
    suffix = "",
  }: {
    value: number;
    label: string;
    suffix?: string;
  }) => (
    <div className="flex flex-col lg:flex-row items-center text-center md:text-left gap-2 md:gap-4">
      <h2 className="font-semibold text-white text-2xl sm:text-3xl lg:text-4xl">
        <CountUp end={value} duration={4} separator="," suffix={suffix} />
      </h2>
      <span className="text-sm sm:text-base lg:text-lg font-normal text-[#5CE1E6]">
        {label}
      </span>
    </div>
  );

  return (
    <Container className="py-8">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col items-center md:items-center md:flex-row md:gap-6">
          <StatItem value={3800} label="User Active" suffix="+" />
        </div>
        <span className="hidden md:block text-white/60">|</span>
        <div className="flex flex-col items-center md:items-center md:flex-row md:gap-6">
          <StatItem value={230} label="Trusted by Company" suffix="+" />
        </div>
        <span className="hidden md:block text-white/60">|</span>
        <div className="flex flex-col items-center md:items-center md:flex-row md:gap-6">
          <StatItem value={230} label="Transaction" suffix="M+" />
        </div>
      </div>
    </Container>
  );
};

export default SubHero;
