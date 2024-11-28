import HeroFirstPart from "./HeroFirstPart";
import HeroSecondPart from "./HeroSecondPart";

const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center py-24">
      <div className="xl:w-1/2 w-full">
        <HeroFirstPart />
      </div>
      <div className="xl:w-1/2 w-full">
        <HeroSecondPart />
      </div>
    </div>
  );
};

export default Hero;
